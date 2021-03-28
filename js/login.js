function storeData(){
    let userName = document.querySelector("#username");
    localStorage.setItem("#username",userName.value);
}

var storedValue = localStorage.getItem("username");


console.log(storedValue);

document.querySelector('#result').innerHTML = "Logged in as: "+ localStorage.getItem('#username');