const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',() =>{
  navbarLinks.classList.toggle('active')
});


  function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}



const ul = document.querySelector('#Paris');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.Paris);
        console.log("Visa första i json-objektet: " + data.Paris[0].name);
        let cities = data.Paris;

        // Returnerar json-bjekten genom att skapa en ny array med map()
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + " " + cities.country +" "+ cities.date;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

  

/*
  const ulr = document.querySelector('#Tokyo');
  function getTokyo(){
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let cities = data.Tokyo;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + " " + cities.country +" "+ cities.date;
            append(ulr, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

  }
  getTokyo();
  */

  let getDivID;
  let cityName;

  function getCity(getDivID,cityName){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Cities;
        var city = JSON.parse(city.Cities);
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.city[0] + " " + cities.country +" "+ cities.date;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getCity('#Tokyo');


/*
    function getCities(){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.cities[0].name,data.cities[0].country));
    }
    getCities();

    */
  


    
