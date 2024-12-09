let date=document.getElementById("date")
let day=document.getElementById("day")
let month=document.getElementById("month")
let year=document.getElementById("year")

const weekDays=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
const months=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
let today=new Date();

date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekDays[today.getDay()];
month.innerHTML=months[today.getMonth()];
year.innerHTML=today.getFullYear();