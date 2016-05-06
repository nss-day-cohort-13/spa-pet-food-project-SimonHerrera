function runIfFails(xhrEvent) {
  console.log("fail");
}

function executeAfterFileLoad() {
  var dogData = JSON.parse(this.responseText);
  // document.getElementById('display-pet-food').innerHTML = infoRequest.responseText;
  console.log("dogData", dogData );

  var foodList = document.getElementById('display-dog-food');
  // console.log("show", foodList );

  dogData.dog_brands.forEach(function(brands) {
    brands.types.forEach(function(types) {
      types.volumes.forEach(function(volumes) {
        var content = "<tr><td>" + brands.name + "</td> ";
          content += "<td>" + types.type + "</td> ";
          content += "<td>" + volumes.name + "</td> ";
          content += "<td>" + volumes.price + "</td></tr> ";
          foodList.innerHTML += content;
          console.log(brands.name);
      });
    });
  });
}

var infoRequest = new XMLHttpRequest();

infoRequest.addEventListener("load", executeAfterFileLoad);
infoRequest.addEventListener("error", runIfFails);
infoRequest.open("GET", 'dog_brands.json');
infoRequest.send();


// Cat Food
function runIfCatFails(xhrEvent) {
  console.log("fail");
  /*Console Network to See Status*/
}

function executeCatAfterFileLoad() {
  var catFood = JSON.parse(this.responseText);
  // document.getElementById('display-pet-food').innerHTML = catInfoRequest.responseText;
  console.log("catFood", catFood );

  var foodList = document.getElementById('display-cat-food');
  // console.log("show", foodList );


  catFood.cat_brands.forEach(function(brands) {
    var breedList = "";
    brands.breeds.forEach(function(breeds) {
      breedList += breeds + " ";
    });
    brands.types.forEach(function(types) {
      types.volumes.forEach(function(volumes) {
        var content = "<tr><td>" + breedList + "</td>"
          content += "<td>" + brands.name + "</td> ";
          content += "<td>" + types.type + "</td> ";
          content += "<td>" + volumes.name + "</td> ";
          content += "<td>" + volumes.price + "</td></tr> ";
          foodList.innerHTML += content;
          console.log(brands.name);
      });
    });
  });
}

var catInfoRequest = new XMLHttpRequest();

catInfoRequest.addEventListener("load", executeCatAfterFileLoad);
catInfoRequest.addEventListener("error", runIfCatFails);
catInfoRequest.open("GET", 'cat_brands.json');
catInfoRequest.send();
