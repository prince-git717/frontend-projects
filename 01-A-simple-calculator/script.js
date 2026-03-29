let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML.trim();
        if (value === '=') {
            string = eval(string);
            input.value = string;
        }

        else if (value === 'Ac') {
            string = "";
            input.value = "";
        }

        else if (value === 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }

    });
});