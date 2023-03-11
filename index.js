
function timeAndDate(){
const weekday = document.getElementById('weekday');
const time = document.getElementById('time');
const d = new Date();
let day = d.getDay();
let meridian;

switch (day) {
    case 0:
      day = "日曜日";
      break;
    case 1:
      day = "月曜部";
      break;
    case 2:
       day = "火曜日";
      break;
    case 3:
      day = "水曜日";
      break;
    case 4:
      day = "木曜日";
      break;
    case 5:
      day = "金曜日";
      break;
    case 6:
      day = "土曜日";
  };

  weekday.textContent = `${day}`;

}

timeAndDate()





