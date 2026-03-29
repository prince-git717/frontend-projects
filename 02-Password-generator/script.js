let inputslider = document.getElementById("inputslider")
let slidervalue = document.getElementById("slidervalue")
let passbox = document.getElementById("passbox")
let bazi = document.getElementById("bazi")
let bazi1 = document.getElementById("bazi1")
let bazi2 = document.getElementById("bazi2")
let bazi3 = document.getElementById("bazi3")
let genbtn = document.getElementById("genbtn")


// showing input slider value 
slidervalue.textContent = inputslider.value;

inputslider.addEventListener("input", () => {
    slidervalue.textContent = inputslider.value;

})
genbtn.addEventListener("click", () => {
    passbox.value = generatePassword();

})
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
let loowerChars = "abcdefghijklmnopqurstuvwxyz"
let allnumbers = "0123456789"
let allsymbols = "@!#$%^&*"
// function to generate password.
function generatePassword() {
    let genPassword = "";
    let allCharse = "";

    allCharse += bazi.checked ? loowerChars : "";
    allCharse += bazi1.checked ? upperChars : "";
    allCharse += bazi2.checked ? allnumbers : "";
    allCharse += bazi3.checked ? allsymbols : "";

    if(allCharse.length === 0){
        return "Select option!";
    }

    let length = Number(inputslider.value);

    for(let i = 0; i < length; i++){
        genPassword += allCharse.charAt(
            Math.floor(Math.random() * allCharse.length)
        );
    }

    return genPassword;
}
