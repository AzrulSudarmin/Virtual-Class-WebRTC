    navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
    
    var RTCIceCandidate = window.mozRTCIceCandidate || 
        window.RTCIceCandidate;
   
    window.RTCPeerConnection = window.RTCPeerConnection 
        || window.mozRTCPeerConnection 
        || window.webkitRTCPeerConnection;

    window.RTCSessionDescription =  window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    


    var users = []
        , localMediaStream
        , remoteMediaStream = null
        , isInCall = false
        , sdpConstraints = {'mandatory': {
                        'OfferToReceiveAudio':true, 
                        'OfferToReceiveVideo':true }}
        , signaling = io('https://still-crag-2857.herokuapp.com/webRTCSignaling', {
            'reconnectionDelay ': 1000})
        , roomName
        , remoteVideo = {}
        , constraints = { "audio":true, "video": {
                            "mandatory": {
                                "maxWidth": "320",
                                "maxHeight": "240",
                            },
                            "optional": [] }
                        }
        , configuration = { 'iceServers': [ { 'url': 'stun:stun.l.google.com:19302' } ,
                            {
                                'url': 'turn:146.148.113.71:3478?transport=udp',
                                'credential': '05yvB7NtzsPfLfopWJGXHlBTgrs==',
                                'username': '1421085917:41784574'
                            },
                            {
                                'url': 'turn:146.148.113.71:3478?transport=tcp',
                                'credential': '05yvB7NtzsPfLfopWJGXHlBTgrs==',
                                'username': '1421085917:41784574'
                            } ]
                        }
        , peerId = null;

    function _(idname){
        return document.getElementById(idname);
    };

    function joinRoom() {
        roomName = $("#room").val();
        signaling.open();
        signaling.emit('joinRoom', roomName, function(cb){
            console.log(cb);
        });
        navigator.getUserMedia(constraints, startCall, errorCall);
    };

    function errorCall(err) {
        console.log('errorCall', err);
    };

    function addLocalStream(stream){
        var video = document.querySelector('#local-video');
        video.src = window.URL.createObjectURL(stream);
        video.muted = true;
        
        localMediaStream = stream;
    };

    function startCall(stream) {
        isInCall = true;
        console.log('startCall');

        if (localMediaStream == null) {
            addLocalStream(stream);
        };
       
        signaling.emit('call', roomName, function(cb){
            console.log(cb);
        });
        _('call').style.display = "none";
        _('hangUp').style.display = "inline";
    };

    function hangUp(){
        signaling.emit('bye', roomName, function(cb){
            console.log(cb);
        });

        if (remoteMediaStream != null) {
            remoteMediaStream.stop();
        };
        
        if (localMediaStream != null) {
            localMediaStream.stop();
        };

        for (var i = 0; i < Object.keys(users).length; i++) {
            $('#remote-video'+users[i].userid).remove();
            $('#divrv'+users[indexUser].userid).remove();
            users[i].peerConn.close();
        };

        _('local-video').src = null;
        _('call').style.display = "inline";
        _('hangUp').style.display = "none";

        users = [];
        isInCall = false;
        localMediaStream = null;
    };

    signaling.on('pickUp', function(destID){
        if (localMediaStream == null) {
            navigator.getUserMedia(constraints, 
            function(stream){
                addLocalStream(stream);
                startPickUp(destID);
            }, 
            errorCall);
        } else if (isInCall) {
            startPickUp(destID);
        };
    });

    function findIndexUsers(id){
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].userid == id) {
                return i;
            };
        };
    }

    function startPickUp(destID){
        users.push({userid:destID ,peerConn: null, dataChannel: null, receiveChannel: null});
        var indexUser = findIndexUsers(destID);

        createRTCPeerCon(destID, indexUser);

        createRTCDataChannel("sendDataChannel", indexUser);

        users[indexUser].peerConn.createOffer(function(desc){
            sendOffer(desc, indexUser, destID)}, 
            createSdpError, sdpConstraints);
       
        _('call').style.display = "none";
        _('hangUp').style.display = "inline";
    }

    function createRTCPeerCon(destID, indexUser){
        //create rtcPeercon receiving streaming
        users[indexUser].peerConn = new RTCPeerConnection(configuration);
        users[indexUser].peerConn.onicecandidate = function(ice){
            iceCb(ice, destID)};
        users[indexUser].peerConn.onaddstream = function(rstream){receiveStreamCb(rstream, destID)};

        users[indexUser].peerConn.addStream(localMediaStream);
    }

    function createRTCDataChannel(label, indexUser){
        users[indexUser].dataChannel = users[indexUser].peerConn.createDataChannel(label);

        users[indexUser].peerConn.ondatachannel = function(event) {
            console.log("receive channel open");
            users[indexUser].receiveChannel = event.channel;
            users[indexUser].receiveChannel.onmessage = handleMessageComing;
        };

        users[indexUser].dataChannel.onerror = function (error) {
            console.log("Data Channel Error:", error);
        };

        users[indexUser].dataChannel.onopen = function () {
            console.log("dataChannel onpen");
        };

        users[indexUser].dataChannel.onclose = function () {
            console.log("The Data Channel is Closed");
        };
    }

    function createSdpError(err) {
       console.log('createSdpError', err);
    }

    function sendOffer(desc, indexUser, destID) {
        console.log('sendOffer', desc);

        users[indexUser].peerConn.setLocalDescription(desc);

        signaling.emit('offer', roomName, desc, destID, function(cb){
            console.log(cb);
        });
    }

    signaling.on('offer', function(msg, destID){
        console.log('receiveOffer', msg);
        users.push({userid:destID ,peerConn: null, dataChannel: null, receiveChannel: null});
        var indexUser = findIndexUsers(destID);

        createRTCPeerCon(destID, indexUser);

        users[indexUser].peerConn.setRemoteDescription(new RTCSessionDescription(msg));

        createRTCDataChannel("sendDataChannel", indexUser);

        users[indexUser].peerConn.createAnswer(function(desc){
            sendAnswer(desc, indexUser,destID)}, 
            createSdpError, sdpConstraints);
    });

    signaling.on('connect', function(){
        console.log("Success connect socket io");
    })

    function sendAnswer(desc, indexUser,destID){
        console.log('sendAnswer', desc, destID);

        users[indexUser].peerConn.setLocalDescription(desc);

        signaling.emit('answer', roomName, desc, destID, function(cb){
            console.log(cb);
        });
    }

    signaling.on('answer', function receiveAnswer(msg, destID) {
        var indexUser = findIndexUsers(destID);

        console.log('receiveAnswer', msg);
        users[indexUser].peerConn.setRemoteDescription(new RTCSessionDescription(msg));

    });

    function receiveStreamCb(rstream, destID) {
        console.log('receiveStreamCb', rstream);

        $('#all-video').append("<div class='video-cont' id='divrv"+destID+"'><video id='remote-video"+destID+"' autoplay></video><label for='remote-video"+destID+"'>Remote Video</label></div>");
        
        remoteVideo[destID] = $('#remote-video'+destID)[0];
        remoteVideo[destID].src = window.URL.createObjectURL(rstream.stream);

        remoteMediaStream = rstream.stream;
        remoteVideo[destID].play();
    }

    function iceCb(ice, destID) {
        console.log('iceCb');

        if (ice.candidate) {
            console.log('sendIceCandidate', ice);
            signaling.emit('candidate', roomName, ice.candidate, destID, function(cb){
                console.log(cb);
            });
        }
    }

    signaling.on('candidate', function receiveIceCandidate(msg, destID) {
        var indexUser = findIndexUsers(destID);

        console.log('receiveIceCandidate', msg);
        users[indexUser].peerConn.addIceCandidate(
            new RTCIceCandidate({
                sdpMLineIndex: msg.sdpMLineIndex,
                candidate: msg.candidate
            }),
            iceCandSuccess, iceCandError
            );
    });

     function iceCandSuccess() {
        console.log('iceCandSuccess');
    }

    function iceCandError(err) {
        console.log('iceCandError',err);
    }

    function handleMessageComing(event){
        var IncomeMessage = JSON.parse(event.data);

        switch(IncomeMessage.type) {
            case 'TextEditor':
                _("text-editor").contentWindow.document.body.innerHTML =  IncomeMessage.val;
                break;
            case 'whiteboard':
                clickX.push(IncomeMessage.clickX);
                clickY.push(IncomeMessage.clickY);
                clickDrag.push(IncomeMessage.clickDrag);
                clickSize.push(IncomeMessage.clickSize);
                clickColor.push(IncomeMessage.curColor);
                redraw();
                paint = false;
                break;

        }
    };

     signaling.on('reconnect_failed', function () {
        console.log('server offline');
     });

    signaling.on('bye', function(destID) {
        var indexUser = findIndexUsers(destID);

        $('#remote-video'+users[indexUser].userid).remove();
        $('#divrv'+users[indexUser].userid).remove();
        users[indexUser].peerConn.close();

        users.splice(indexUser,1);
    });

    window.onbeforeunload = function(e){
        signaling.emit('bye', roomName);
    }