var xhr = new XMLHttpRequest();

xhr.open("GET", 'dog_brands.json', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    //404 could not find
    //500 error
    //200-299 ok or 304 no change since last request
    var status = xhr.status;
    if ((status >= 200 && status < 300) ||
      status === 304) {
        console.log("status", status);
        // var data = JSON.parse(this.responseText);
        // console.log("data", data);
        document.getElementById('display-pet-food')
        .innerHTML = xhr.responseText;
        alert(xhr.responseText);
      } else {
          alert('failure/error');
      }
  }
};

xhr.send(null);

// alert(xhr.responseText + "This is outside of the event handler");

console.log("show data", xhr );


//Example of for loop instead of forEach from trial page

  //   for(i = 0; i < data.dog_brands.length; i += 1) {
  //     var dogFood = data.dog_brands[i];
  //     foodList.innerHTML +=
  //     "<table><tr>" + dogFood.name + "</tr></table>";

  //     for(j = 0; j < dogFood.types.length; j += 1) {
  //     var dogFoodType = dogFood.types[j];
  //     foodList.innerHTML +=
  //     "<table><tr>" + dogFoodType.type + "</tr></table>";

  //         for(k = 0; k < dogFoodType.volumes.length; k += 1 ) {
  //         var volumes = dogFoodType.volumes[k];
  //         foodList.innerHTML +=
  //         "<table><tr>" + volumes.name + "</tr></table>";

  //         foodList.innerHTML +=
  //         "<table><tr>" + volumes.price + "</tr></table>";

  //         }
  //     }
  // }






