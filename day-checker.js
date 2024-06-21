let day = prompt("What day is today?")

day =day.toLowerCase();

if(day==="monday"||day==="tuesday"||day==="wednesday"||day==="thursday"||day==="friday"){
    alert("Today is Weekday")
}
else if(day==="saturday"||day==="sunday"){
    alert("Today is Weekend")
}
else{
    alert(" INVALID DATA")
}
