const search = document.getElementById('site-search');
let places = [];

search.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();


    const filteredPlace = places.filter((place) => {
        return place.name.toLowerCase().includes(searchString);
    });
    append(filteredPlace);

});


fetch('place.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        places = data;
        append(places);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function append(data) {
    var mainContainer = document.getElementById('myData');
    mainContainer.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        mainContainer.innerHTML += `<div class="col mb-5">
                                            <div class="card h-100">
                                              <img class="card-img-top" src="${data[i].image}" alt="..." />
                                              <div class="card-body p-4">
                                                <div class="text-center">
                                                  <h5 class="fw-bolder" style="height:50px">${data[i].name}</h5>
                                                  ${data[i].type}
                                                </div>
                                              </div>
                                          </div>`;
    }
}