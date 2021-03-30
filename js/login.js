
let yoo = document.querySelector('#result').innerHTML = "Logged in as: "+ localStorage.getItem('#username');

function storeData(){
    let userName = document.querySelector("#username");
    localStorage.setItem("#username",userName.value);
    
    

}

 

function logOut(){
    localStorage.clear();
    window.location.reload();

    
}



