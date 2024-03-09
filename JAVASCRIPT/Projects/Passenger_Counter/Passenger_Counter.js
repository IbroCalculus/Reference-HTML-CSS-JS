
var count = 0;
var count_el = document.getElementById("count_el");
var save_el = document.getElementById("save_el")

        function incrFunc(){
            if(count <=10){
                count += 1;
                count_el.innerHTML = count;
            }else{
                alert("Value cannot exceed 10")
            }
            
        }

        function decrFunc(){
            if(count >=0){
                count -= 1;
                count_el.innerHTML = count;
            }else{
                alert("Value cannot be less than 0")
            }        
        }


        function saveFunc(){
            var countStr = `${count} - `
            save_el.innerHTML += countStr;
            // save_el.textContent += countStr;
            count = 0;
            count_el.innerHTML = count;
            countStr = "";

        }

        count_el.ondblclick = function(){
            alert("You double clicked on " + count);
        }
