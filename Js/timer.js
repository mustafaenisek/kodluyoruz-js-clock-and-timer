let userInfo = prompt("What's your name ?");
let user = document.querySelector("#user");

user.innerHTML = `${
  userInfo[0].toUpperCase() + userInfo.slice(1).toLowerCase()
}!`;

function Hours() {
  var date = new Date().toLocaleTimeString("tr-TR");
  document.getElementById("clock").innerHTML = date;
}
setInterval(Hours, 1000);

let time = new Date();
let days = time.getDay();
switch (days) {
  case 0:
    document.getElementById("days").innerHTML = "Sunday";
    break;
  case 1:
    document.getElementById("days").innerHTML = "Monday";
    break;
  case 2:
    document.getElementById("days").innerHTML = "Tuesday";
    break;
  case 3:
    document.getElementById("days").innerHTML = "Wednesday";
    break;
  case 4:
    document.getElementById("days").innerHTML = "Thursday";
    break;
  case 5:
    document.getElementById("days").innerHTML = "Friday";
    break;
  case 6:
    document.getElementById("days").innerHTML = "Saturday";
    break;
  default:
    break;
}
