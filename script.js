var button = document.getElementById("submit");
		    var input1 = document.getElementById("in1");
		    var input2 = document.getElementById("in2");
		    var input3 = document.getElementById("in3");
		    var input4 = document.getElementById("in4");
		    var text = document.getElementById("input");
		    var output = document.getElementById("output");
		    var month;
		    var day;
		    function dayAt(num) {
		        switch(num){
    		        case 0: return "Sunday";
    		        case 1: return "Monday";
    		        case 2: return "Tuesday";
    		        case 3: return "Wednesday";
    		        case 4: return "Thursday";
    		        case 5: return "Friday";
    		        case 6: return "Saturday";
		        }
		        return num;
		    }
		    
		    function cV(num) {
		        return -2*(num%4) + 6;
		    }
		    
		    function lyV(date) { 
		        if((((date.substring(8) % 4 == 0) && (date.substring(6) % 100 != 0)) || date.substring(6) % 400 == 0) && (month == 1 || month == 2)){
		            return (Math.floor((date.substring(8) / 4)) - 1);
		        } else {
		            return (Math.floor(date.substring(8) / 4));
		        }
		    }
		    
		    function mV(num){
		        switch(num){
    		        case 1: return 0;
    		        case 2: return 3;
    		        case 3: return 3;
    		        case 4: return 6;
    		        case 5: return 1;
    		        case 6: return 4;
    		        case 7: return 6;
    		        case 8: return 2;
    		        case 9: return 5;
    		        case 10: return 0;
    		        case 11: return 3;
    		        case 12: return 5;
		        }
		    }
		    
		    function question(){
		        alert("In 1752, the current calendar model was 11 days behind because of it's incorrect calculation of leap years, so they jumped from the Julian calendar to the Gregorian calendar (the one we still use today). To do so August 2nd through August 13th 1752 was completely skipped. This means August 2nd was wednesday, and August 14th was the next day, a thursday. Selecting historic mode makes the days we skipped impossible to enter, and adds the 11 days to every day before it to reflect how that day was marked in historic times.");
		    }
		    
		    function check(){
		        if (input1.checked){
		            if(moment(text.value, 'MM-DD-YYYY').isValid() && text.value.length == 10){
		                month = parseInt(text.value.substring(0,2));
		                day = parseInt(text.value.substring(3,5));
		                if (input4.checked && moment(text.value, 'MM-DD-YYYY').isBefore('1752-09-03')){
		                    day += 11;
		                    calculate();
		                } else if (input4.checked && moment(text.value, 'MM-DD-YYYY').isBetween('1752-09-02','1752-09-14')){
    		                text.value = "Input not supported";
		                } else {
		                    calculate();
		                }
		            } else {
		                text.value = "Input not supported";
		            }
		        } else {
		            if(moment(text.value, 'DD-MM-YYYY').isValid() && text.value.length == 10){
		                month = parseInt(text.value.substring(3,5));
		                day = parseInt(text.value.substring(0,2));
		                if (input4.checked && moment(text.value, 'DD-MM-YYYY').isBefore('1752-09-03')){
		                    day += 11;
		                    calculate();
		                } else if (input4.checked && moment(text.value, 'DD-MM-YYYY').isBetween('1752-09-02','1752-09-14')){
    		                text.value = "Input not supported";
		                } else {
		                    calculate();
		                }
		            } else {
		                text.value = "Input not supported";
		            }
		        } 
		    }
		    
		    function calculate(){
		        var s1 = cV(text.value.substring(6,8))+ parseInt(text.value.substring(8)) + lyV(text.value) + mV(month) + day;
		        var s2 = s1 % 7;
		        output.innerHTML = dayAt(Math.floor(s2));
		    }