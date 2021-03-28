function storeData(){
    let userName = document.getElementById("fname");
    let passWord = document.getElementById("lname");
    localStorage.setItem("fname",userName.value);
    localStorage.setItem("lname",passWord.value)
}

var storedValue = localStorage.getItem("fname");
var stores = localStorage.getItem("lname")


console.log(storedValue,stores);

document.querySelector('#result').innerHTML = localStorage.getItem('fname') + localStorage.getItem('lname');