fetch('place.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        append(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function append(data) {
    var mainContainer = document.getElementById('myData');
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