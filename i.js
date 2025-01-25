let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector("input");

inputField.addEventListener('keydown', (e) => {
    e.preventDefault();
});

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            inputField.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            inputField.value = string;
        } else if (e.target.innerHTML == "de") {
            string = string.slice(0, -1); 
            // string = string.slice(0, -1); 0 
            //  hogaya apna first number jaha se start hoga ab 
            // hame last se 1 number del karna hai toh hum last 
            // keliye -1 use kare gai index ka concept use huwa hai 
            // agr -2 hoga toh last se 2 numbers del kardega
            inputField.value = string;
        } else if (e.target.innerHTML == "%") {
            string = (eval(string) / 100).toString(); 
            // ye perecentage mai convert karega
            inputField.value = string;
        } else {
            string += e.target.innerHTML; 
            inputField.value = string;
        }
    });
});
