<ul>
	<li> <a id="print"> <img src="img/text-editor/print.png" id="print"> </a> </li>
	<li> <a id="undo"> <img src="img/text-editor/undo.png" id="undo"> </a> </li>
	<li> <a id="redo"> <img src="img/text-editor/redo.png"> </a> </li> 
	<li> <a id="remove-format"> Remove Format </a> </li>
</ul>

<ul>
	<li>
		<select id="fonts">
			<option value="Arial">Arial</option>
            		<option value="'Comic Sans MS'">Comic Sans MS</option>
            		<option value="'Courier New'">Courier New</option>
            		<option value="'Monotype Corsiva'">Monotype</option>
            		<option value="Tahoma">Tahoma</option>
            		<option value="'Times New Roman'">Times New Roman</option>
		</select>
		<select id="fontsize">
			<option value="1">1</option>
        		<option value="2">2</option>
            		<option value="3">3</option>
            		<option value="4">4</option>
        	 	<option value="5">5</option>
            		<option value="6"> 6</option>
            		<option value="7"> 7 </option>
       		</select>
	</li>

	<li>
		<a class='' id="bold">B</a>
		<a class='italic' id="italic">I</a>
		<a class='' id="underline"> U </a>
	</li>

	<li>
		<a class="line-through" id="strikeThrough">abc</a>
	</li>

	<li>
		<div class="select-script down">
			<input type='radio' name='script' value='superscript' id='superscript' class='input-hidden'/>
            		<label for='superscript' class="tool-font">x<sup>2</sup></label>

            		<input type='radio' name='script' value='subscript' id='subscript' class='input-hidden'/>
            		<label for='subscript' class="tool-font">x<sub>2</sub></label> 
		</div> 
	</li>

	<li>
		<div class="group-fore-color">
        
        		<div id="fore-color-header" class="fore-color-header">
        			<span id="foreColorSelected" style="border-bottom: 3px solid #bebebe;">A</span> 
        			<img src="img/text-editor/down.png">
        		</div>
        
        		<div id="fore-color-select" class="fore-color-select"> 
        			<div class="def-fore-color">
					<input type='radio' name='foreColor' value='rgb(255, 255, 255)' id='co1' class='input-hidden'/>
            				<label for='co1' style="background-color: rgb(255, 255, 255);"></label>

            				<input type='radio' name='foreColor' value='rgb(0, 0, 0)' id='co2' class='input-hidden'/>
            				<label for='co2' style="background-color: rgb(0, 0, 0);"></label>

                                	<input type='radio' name='foreColor' value='rgb(213, 230, 230)' id='co3' class='input-hidden'/>
                                	<label for='co3' style="background-color: rgb(213, 230, 230);"></label>

                                	<input type='radio' name='foreColor' value='rgb(68, 84, 106)' id='co4' class='input-hidden'/>
                                	<label for='co4' style="background-color: rgb(68, 84, 106);"></label>

                                	<input type='radio' name='foreColor' value='rgb(91, 155, 213)' id='co5' class='input-hidden'/>
                                	<label for='co5' style="background-color: rgb(91, 155, 213);"></label>

                                	<input type='radio' name='foreColor' value='rgb(237, 125, 49)' id='co6' class='input-hidden'/>
                                	<label for='co6' style="background-color: rgb(237, 125, 49);"></label>

                                	<input type='radio' name='foreColor' value='rgb(165, 165, 165)' id='co7' class='input-hidden'/>
                                	<label for='co7' style="background-color: rgb(165, 165, 165);"></label>

                                	<input type='radio' name='foreColor' value='rgb(255, 192, 0)' id='co8' class='input-hidden'/>
                        	 	<label for='co8' style="background-color: rgb(255, 192, 0);"></label>

                                	<input type='radio' name='foreColor' value='rgb(68, 114, 196)' id='co9' class='input-hidden'/>
                                	<label for='co9' style="background-color: rgb(68, 114, 196);"></label>

                                	<input type='radio' name='foreColor' value='rgb(112, 173, 71)' id='co10' class='input-hidden'/>
                                	<label for='co10' style="background-color: rgb(112, 173, 71);"></label>

                                	<input type='radio' name='foreColor' value='rgb(242, 242, 242)' id='co11' class='input-hidden'/>
                                	<label for='co11' style="background-color: rgb(242, 242, 242);"></label>

                                	<input type='radio' name='foreColor' value='rgb(127, 127, 127)' id='co12' class='input-hidden'/>
                                	<label for='co12' style="background-color: rgb(127, 127, 127);"></label>

                                	<input type='radio' name='foreColor' value='rgb(208, 206, 206)' id='co13' class='input-hidden'/>
                                	<label for='co13' style="background-color: rgb(208, 206, 206);"></label>

                                	<input type='radio' name='foreColor' value='rgb(214, 220, 228)' id='co14' class='input-hidden'/>
                                	<label for='co14' style="background-color: rgb(214, 220, 228);"></label>

                                	<input type='radio' name='foreColor' value='rgb(222, 235, 246)' id='co15' class='input-hidden'/>
                                	<label for='co15' style="background-color: rgb(222, 235, 246);"></label>

                                	<input type='radio' name='foreColor' value='rgb(250, 229, 213)' id='co16' class='input-hidden'/>
                                	<label for='co16' style="background-color: rgb(250, 229, 213);"></label>

                                	<input type='radio' name='foreColor' value='rgb(237, 237, 237)' id='co17' class='input-hidden'/>
                                	<label for='co17' style="background-color: rgb(237, 237, 237);"></label>

                                	<input type='radio' name='foreColor' value='rgb(255, 242, 204)' id='co18' class='input-hidden'/>
                                	<label for='co18' style="background-color: rgb(255, 242, 204);"></label>

                                	<input type='radio' name='foreColor' value='rgb(217, 226, 243)' id='co19' class='input-hidden'/>
                                	<label for='co19' style="background-color: rgb(217, 226, 243);"></label>

                                	<input type='radio' name='foreColor' value='rgb(226, 239, 217)' id='co20' class='input-hidden'/>
                                	<label for='co20' style="background-color: rgb(226, 239, 217);"></label>

                                	<input type='radio' name='foreColor' value='rgb(216, 216, 216)' id='co21' class='input-hidden'/>
                                	<label for='co21' style="background-color: rgb(216, 216, 216);"></label>

                                	<input type='radio' name='foreColor' value='rgb(89, 89, 89)' id='co22' class='input-hidden'/>
                                	<label for='co2' style="background-color: rgb(89, 89, 89);"></label>

                                	<input type='radio' name='foreColor' value='rgb(174, 171, 171)' id='co23' class='input-hidden'/>
                                	<label for='co23' style="background-color: rgb(174, 171, 171);"></label>

                                	<input type='radio' name='foreColor' value='rgb(173, 185, 202)' id='co24' class='input-hidden'/>
                                	<label for='co24' style="background-color: rgb(173, 185, 202);"></label>

                                	<input type='radio' name='foreColor' value='rgb(189, 215, 238)' id='co25' class='input-hidden'/>
                                	<label for='co25' style="background-color: rgb(189, 215, 238);"></label>

                                	<input type='radio' name='foreColor' value='rgb(247, 203, 172)' id='co26' class='input-hidden'/>
	                                <label for='co26' style="background-color: rgb(247, 203, 172);"></label>

                                	<input type='radio' name='foreColor' value='rgb(219, 219, 219)' id='co27' class='input-hidden'/>
                                	<label for='co27' style="background-color: rgb(219, 219, 219);"></label>

                                	<input type='radio' name='foreColor' value='rgb(254, 229, 153)' id='co28' class='input-hidden'/>
                                	<label for='co28' style="background-color: rgb(254, 229, 153);"></label>

                                	<input type='radio' name='foreColor' value='rgb(180, 198, 231)' id='co29' class='input-hidden'/>
                                	<label for='co29' style="background-color: rgb(180, 198, 231);"></label>

                                	<input type='radio' name='foreColor' value='rgb(197, 224, 179)' id='co30' class='input-hidden'/>
                                	<label for='co30' style="background-color: rgb(197, 224, 179);"></label>

                                	<input type='radio' name='foreColor' value='rgb(191, 191, 191)' id='co31' class='input-hidden'/>
                                	<label for='co31' style="background-color: rgb(191, 191, 191);"></label>

                                	<input type='radio' name='foreColor' value='rgb(63, 63, 63)' id='co32' class='input-hidden'/>
                                	<label for='co32' style="background-color: rgb(63, 63, 63);"></label>

                        	 	<input type='radio' name='foreColor' value='rgb(117, 112, 112)' id='co33' class='input-hidden'/>
                                	<label for='co33' style="background-color: rgb(117, 112, 112);"></label>

                                	<input type='radio' name='foreColor' value='rgb(132, 150, 176)' id='co34' class='input-hidden'/>
                                	<label for='co34' style="background-color: rgb(132, 150, 176);"></label>

                                	<input type='radio' name='foreColor' value='rgb(156, 195, 229)' id='co35' class='input-hidden'/>
                                	<label for='co35' style="background-color: rgb(156, 195, 229);"></label>

                                	<input type='radio' name='foreColor' value='rgb(244, 177, 131)' id='co36' class='input-hidden'/>
                                	<label for='co36' style="background-color: rgb(244, 177, 131);"></label>

                                	<input type='radio' name='foreColor' value='rgb(201, 201, 201)' id='co37' class='input-hidden'/>
                                	<label for='co37' style="background-color: rgb(201, 201, 201);"></label>

                                	<input type='radio' name='foreColor' value='rgb(255, 217, 101)' id='co38' class='input-hidden'/>
                                	<label for='co8' style="background-color: rgb(255, 217, 101);"></label>

                                	<input type='radio' name='foreColor' value='rgb(142, 170, 219)' id='co39' class='input-hidden'/>
                                	<label for='co9' style="background-color: rgb(142, 170, 219);"></label>

                                	<input type='radio' name='foreColor' value='rgb(168, 208, 141)' id='co40' class='input-hidden'/>
                                	<label for='co10' style="background-color: rgb(168, 208, 141);"></label>

                                	<input type='radio' name='foreColor' value='rgb(165, 165, 165)' id='co41' class='input-hidden'/>
                                	<label for='co41' style="background-color: rgb(165, 165, 165);"></label>

                                	<input type='radio' name='foreColor' value='rgb(38, 38, 38)' id='co42' class='input-hidden'/>
                                	<label for='co42' style="background-color: rgb(38, 38, 38);"></label>

                                	<input type='radio' name='foreColor' value='rgb(58, 56, 56)' id='co43' class='input-hidden'/>
                                	<label for='co43' style="background-color: rgb(58, 56, 56);"></label>

                                	<input type='radio' name='foreColor' value='rgb(50, 63, 79)' id='co44' class='input-hidden'/>
                                	<label for='co44' style="background-color: rgb(50, 63, 79);"></label>

                                	<input type='radio' name='foreColor' value='rgb(46, 117, 181)' id='co45' class='input-hidden'/>
                                	<label for='co45' style="background-color: rgb(46, 117, 181);"></label>

                                	<input type='radio' name='foreColor' value='rgb(197, 90, 17)' id='co46' class='input-hidden'/>
                                	<label for='co46' style="background-color: rgb(197, 90, 17);"></label>

                                	<input type='radio' name='foreColor' value='rgb(123, 123, 123)' id='co47' class='input-hidden'/>
                                	<label for='co47' style="background-color: rgb(123, 123, 123);"></label>

					<input type='radio' name='foreColor' value='rgb(191, 144, 0)' id='co48' class='input-hidden'/>
                                	<label for='co48' style="background-color: rgb(191, 144, 0);"></label>

                                	<input type='radio' name='foreColor' value='rgb(47, 84, 150)' id='co49' class='input-hidden'/>
                                	<label for='co49' style="background-color: rgb(47, 84, 150);"></label>

                                	<input type='radio' name='foreColor' value='rgb(83, 129, 53)' id='co50' class='input-hidden'/>
                                	<label for='co50' style="background-color: rgb(83, 129, 53);"></label>

                                	<input type='radio' name='foreColor' value='rgb(127, 127, 127)' id='co51' class='input-hidden'/>
                                	<label for='co51' style="background-color: rgb(127, 127, 127);"></label>

                                	<input type='radio' name='foreColor' value='rgb(12, 12, 12)' id='co52' class='input-hidden'/>
                                	<label for='co52' style="background-color: rgb(12, 12, 12);"></label>

                    			<input type='radio' name='foreColor' value='rgb(23, 22, 22)' id='co53' class='input-hidden'/>
                    			<label for='co53' style="background-color: rgb(23, 22, 22);"></label>

                    			<input type='radio' name='foreColor' value='rgb(34, 42, 53)' id='co54' class='input-hidden'/>
                    			<label for='co54' style="background-color: rgb(34, 42, 53);"></label>

                    			<input type='radio' name='foreColor' value='rgb(30, 78, 121)' id='co55' class='input-hidden'/>
                    			<label for='co55' style="background-color: rgb(30, 78, 121);"></label>

                    			<input type='radio' name='foreColor' value='rgb(131, 60, 11)' id='co56' class='input-hidden'/>
                    			<label for='co56' style="background-color: rgb(131, 60, 11);"></label>

                    			<input type='radio' name='foreColor' value='rgb(82, 82, 82)' id='co57' class='input-hidden'/>
                    			<label for='co57' style="background-color: rgb(82, 82, 82);"></label>

                    			<input type='radio' name='foreColor' value='rgb(127, 96, 0)' id='co58' class='input-hidden'/>
                    			<label for='co58' style="background-color: rgb(127, 96, 0);"></label>

                    			<input type='radio' name='foreColor' value='rgb(31, 56, 100)' id='co59' class='input-hidden'/>
                    			<label for='co59' style="background-color: rgb(31, 56, 100);"></label>

                    			<input type='radio' name='foreColor' value='rgb(55, 86, 35)' id='co60' class='input-hidden'/>
                			<label for='co60' style="background-color: rgb(55, 86, 35);"></label>
                		</div>
                
                		More Color
				
				<div class="moreColor">
                    			<input type="color" name="favcolor" id="morecolor" value="rgb(0 ,0 ,0)">
                			<label for="morecolor">Select color</label>
            			</div>
        		</div>
    		</div>
    	</li>

	<li>
		<div class="select-margin">
                	<input type='radio' name='margin' value='justifyLeft' id='left' class='input-hidden'/>
                	<label for='left'><img src='img/text-editor/left.png' alt='Left' /></label>

                	<input type='radio' name='margin' value='justifyCenter' id='center' class='input-hidden'/>
                	<label for='center'><img src='img/text-editor/center.png' alt='Center' /></label>

                	<input type='radio' name='margin' value='justifyRight' id='right' class='input-hidden'/>
                	<label for='right'><img src='img/text-editor/right.png' alt='Right' /></label>

                	<input type='radio' name='margin' value='justifyFull' id='full' class='input-hidden'/>
                	<label for='full'><img src='img/text-editor/justify.png' alt='Full' /></label>
		</div> 
	</li>

        <li>
        	<div class="select-list">
                	<input type='radio' name='list' value='insertOrderedList' id='insertOrderedList' class='input-hidden pointer'/>
                        <label for='insertOrderedList'><img src="img/text-editor/number_list.png"></label>

			<input type='radio' name='list' value='insertUnorderedList' id='insertUnorderedList' class='input-hidden pointer'/>
            		<label for='insertUnorderedList'><img src="img/text-editor/bullet_list.png"></label> 
		</div> 
	</li>

        <li>
        	<a id="indent" class="pointer"><img src="img/text-editor/indent.png" height="30px"></a> 
                <a id="outdent" class="pointer"><img src="img/text-editor/outdent.png" height="30px"></a> 
	</li>
</ul>
