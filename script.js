var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);

  

function ifCases(response) {
  return (
      response[0].title === 'Work' &&
      response[1].title === 'Play' &&
      response[2].title === 'Study' &&
      response[3].title === 'Exercise' &&
      response[4].title === 'Social' &&
      response[5].title === 'Self Care'
  );
}

let daily = document.querySelector('.daily');
daily.addEventListener("click", function() {
  if(ifCases(response)){
    for (let i = 0; i < response.length; i++) {
      document.querySelector(`.current${i}`).innerHTML = response[i].timeframes.daily.current;
      document.querySelector(`.previous${i}`).innerHTML = response[i].timeframes.daily.previous;
    }    
    document.querySelectorAll('.interval').forEach(function(element) {
      element.innerHTML = 'Day';
    });
  }
 
})


let weekly = document.querySelector('.weekly');
weekly.addEventListener("click", function() {
  if(ifCases(response)){
    for (let i = 0; i < response.length; i++) {
      document.querySelector(`.current${i}`).innerHTML = response[i].timeframes.weekly.current;
      document.querySelector(`.previous${i}`).innerHTML = response[i].timeframes.weekly.previous;
    }    
    document.querySelectorAll('.interval').forEach(function(element) {
      element.innerHTML = 'Week';
    });
  }
 
})

let monthly = document.querySelector('.monthly');
monthly.addEventListener("click", function() {
  if(ifCases(response)){
    for (let i = 0; i < response.length; i++) {
      document.querySelector(`.current${i}`).innerHTML = response[i].timeframes.monthly.current;
      document.querySelector(`.previous${i}`).innerHTML = response[i].timeframes.monthly.previous;
    }    
    document.querySelectorAll('.interval').forEach(function(element) {
      element.innerHTML = 'Month';
    });
  }
 
})

}}


xhttp.open("GET", "data.json", true);
xhttp.send();
