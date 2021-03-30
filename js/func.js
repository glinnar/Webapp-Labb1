
  function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let getDivID;

const ul = document.querySelector('#Paris');
const url = 'data/data.json';
function getParis(getDivID,){
    let id = document.querySelector(getDivID);
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Paris;
       cities.map(function(cities) {
            let li = createNode('p');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getParis('#Paris');



  function getTokyo(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Tokyo;
       cities.map(function(cities) {
            let li = createNode('p');
            let br = createNode('br');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li,br);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getTokyo('#Tokyo');


  function getBerlin(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Berlin;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getBerlin('#Berlin');

  function getLondon(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.London;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getLondon('#London');


  function getNewYork(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.NewYork;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country ;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getNewYork('#NewYork');

  function getMiami(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Miami;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getMiami('#Miami');



  function getPrague(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Prague;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getPrague('#Prague');


  function getRome(getDivID,){
    let id = document.querySelector(getDivID);
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(city) {
        let cities = city.Rome;
       cities.map(function(cities) {
            let li = createNode('li');
            li.innerHTML = cities.name + "<br> " + cities.country;
            append(id, li);
        })
    
    })

    .catch(function(error) {
        console.log(error);
    }); 

  }
  getRome('#Rome');


  
  
  


    
