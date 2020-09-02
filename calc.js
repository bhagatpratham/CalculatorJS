var btns = document.getElementsByTagName("button");
var calcInput = document.getElementById("calc-input");

for (var thisBtn of btns) {
    thisBtn.addEventListener('click', function() {
        // For "="
        if (this.innerHTML == "=")
        calcInput.value = eval(calcInput.value);
        // For "C" (clear)
        else if (this.innerHTML == "C")
        calcInput.value = "";
        else
        calcInput.value += this.innerHTML;
    });
}            
