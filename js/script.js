let search = document.getElementById('search');
let button = document.querySelector('.find');
let apiUrl = ``;
let city = ``;
let response;
let responseData;
let forcastData = document.getElementById('forcast');
let days = ['sunday', 'Monday', 'Tuseday', 'wensday', 'thursday', 'Friday', 'saturday']
let thisDay = new Date();
let hour = thisDay.getHours();

search.addEventListener('input', function () {
  city = search.value;
  apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a570783b1cad4bf4a98154504212008&q=${city}&days=3`;
  console.log(apiUrl);
})
button.addEventListener('mouseleave', function () { console.log(`hi`);})
button.addEventListener('click', function () {
  if (city == ``) {
    alert('please enter city')
    console.log('please enter city');
  } else {
    (async function () {
      response = await fetch(apiUrl);
      responseData = await response.json();
      console.log(responseData.location.name);
      console.log(responseData.forecast.forecastday[0].date);
      console.log(responseData.forecast.forecastday[0].day.maxtemp_c);
      forcastData.innerHTML = `<div class="col-md p-0 firstDay">
                                <div class="d-flex align-item-center justify-content-between p-3 firstDate">
                                  <h5 class="text-white">${days[thisDay.getDay()]}</h5>  
                                  <h5 class="text-white">${responseData.forecast.forecastday[0].date}</h5>
                                </div>
                                <div class="text-muted">
                                  <h5 class='p-3'>${responseData.location.name}</h5>
                                </div>
                                <div class="d-flex align-item-center justify-content-between p-3">
                                  <div class="text-white font-weight-bold font">${responseData.forecast.forecastday[0].hour[hour].temp_c}<sup>o</sup>C</div>
                                  <div><img src="${responseData.forecast.forecastday[0].hour[hour].condition.icon}"></div>
                                </div>
                                <h6 class = 'text-primary p-3'>${responseData.forecast.forecastday[0].hour[hour].condition.text}</h6>
                                <h6 class = "text-white p-3">Wind direction : ${responseData.forecast.forecastday[0].hour[hour].wind_dir}</h6>
                              </div>
                              <div class="col-md p-0">
                              <div class = "py-3 secondDate">
                              <h5 class="text-white text-center">${days[thisDay.getDay()+1]}</h5>
                              </div>
                              <div class= "d-flex align-item-center justify-content-between p-3"><img src="${responseData.forecast.forecastday[1].day.condition.icon}" class = "d-inline-block m-auto"></div>
                              <div class="text-white  text-center py-3"> <h5>Max: ${responseData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h5></div>
                              <div class="text-muted  text-center py-3">Min: ${responseData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</div>
                              <div class="text-primary text-center">${responseData.forecast.forecastday[1].day.condition.text} </div>
                            </div>
                            <div class="col-md p-0 thirdDay">
                              <div class = "py-3 thirdDate">
                              <h5 class="text-white text-center">${days[thisDay.getDay()+2]}</h5>
                              </div>
                              <div class= "d-flex align-item-center justify-content-between p-3"><img src="${responseData.forecast.forecastday[2].day.condition.icon}" class = "d-inline-block m-auto"></div>
                              <div class="text-white  text-center py-3"> <h5>Max: ${responseData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h5></div>
                              <div class="text-muted  text-center py-3">Min: ${responseData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</div>
                              <div class="text-primary text-center">${responseData.forecast.forecastday[2].day.condition.text} </div>
                            </div>`
    })();
  }
})


window.onload = async function () {

  response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a570783b1cad4bf4a98154504212008&q=alex&days=3`);
  responseData = await response.json();
  // console.log(responseData.forecast.forecastday[0].date);
  // console.log(responseData.forecast.forecastday[0].hour[hour].condition.icon);
  // console.log(responseData.forecast.forecastday[0].day.maxtemp_c);
  forcastData.innerHTML = `<div class="col-md p-0 firstDay">
                              <div class="d-flex align-item-center justify-content-between p-3 firstDate">
                                <h5 class="text-white">${days[thisDay.getDay()]}</h5>  
                                <h5 class="text-white">${responseData.forecast.forecastday[0].date}</h5>
                              </div>
                              <div class="text-muted">
                                <h5 class='p-3'>${responseData.location.name}</h5>
                              </div>
                              <div class="d-flex align-item-center justify-content-between p-3">
                                <div class="text-white font-weight-bold font">${responseData.forecast.forecastday[0].hour[hour].temp_c}<sup>o</sup>C</div>
                                <div><img src='http:${responseData.forecast.forecastday[0].hour[hour].condition.icon}'></div>
                              </div>
                              <h6 class = 'text-primary p-3'>${responseData.forecast.forecastday[0].hour[hour].condition.text}</h6>
                              <h6 class = "text-white p-3">Wind direction : ${responseData.forecast.forecastday[0].hour[hour].wind_dir}</h6>
                            </div>
                            <div class="col-md p-0">
                              <div class = "py-3 secondDate">
                              <h5 class="text-white text-center">${days[thisDay.getDay()+1]}</h5>
                              </div>
                              <div class= "d-flex align-item-center justify-content-between p-3"><img src='http:${responseData.forecast.forecastday[1].day.condition.icon}' class = "d-inline-block m-auto"></div>
                              <div class="text-white  text-center py-3"> <h5>Max: ${responseData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h5></div>
                              <div class="text-muted  text-center py-3">Min: ${responseData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</div>
                              <div class="text-primary text-center">${responseData.forecast.forecastday[1].day.condition.text} </div>
                            </div>
                            <div class="col-md p-0 thirdDay">
                              <div class = "py-3 thirdDate">
                              <h5 class="text-white text-center">${days[thisDay.getDay()+2]}</h5>
                              </div>
                              <div class= "d-flex align-item-center justify-content-between p-3"><img src='http:${responseData.forecast.forecastday[2].day.condition.icon}' class = "d-inline-block m-auto"></div>
                              <div class="text-white  text-center py-3"> <h5>Max: ${responseData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h5></div>
                              <div class="text-muted  text-center py-3">Min: ${responseData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</div>
                              <div class="text-primary text-center">${responseData.forecast.forecastday[2].day.condition.text} </div>
                            </div>`
}

