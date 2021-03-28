function validateFormData(){
    const regex =/^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let fname = document.forms["regForm"]["fname"].value;
    let lname = document.forms["regForm"]["lname"].value;
    let username = document.forms["regForm"]["username"].value;
    let password = document.forms["regForm"]["password"].value;
    let email = document.forms["regForm"]["email"].value;
    let phone = document.forms["regForm"]["tel"].value;
    
    if (fname == "") {
      alert("First name must be filled out");
      return false;
    }
    
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
      }
      

      if (username == "") {
        alert("Last name must be filled out");
        return false;
      }
      

      if (password == "") {
        alert("Last name must be filled out");
        return false;
      }

    if(regex.test(phone)){
       
              
    }else{ 
        alert("Phone must contain 10 numbers");
       
        
    }


    if(emailRegex.test(email)){
               
        
    }else{ 
        alert("You have entered an invalid email address!")
        console.log(email);
        
    }

}


const formData = document.querySelector('#regForm');
const username = document.querySelector('#username');
const output = document.querySelector('#test');

function userCreated(){
    let user = username.value;

     alert ("New User " + user + " was created");

}

formData.addEventListener('submit', userCreated,false);