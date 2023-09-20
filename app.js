const uppperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+/"

//SELECTORS
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const lowerInput = document.getElementById("lower-case")
const upperInput = document.getElementById("upper-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const button = document.getElementById("btn")


const getRandomData =(data) => {
    return data[Math.floor(Math.random() * data.length)]
}

const generate = (password = "") => {
if(upperInput.checked){
    password += getRandomData(uppperCase)
}
if(lowerInput.checked){
    password += getRandomData(lowerCase)
}
if(numberInput.checked){
    password += getRandomData(numbers)
}
if(symbolInput.checked){
    password += getRandomData(symbols)
}
if(password.length < totalChar.value){
    return generate(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
button.addEventListener('click',function(){
    generate()
})
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}