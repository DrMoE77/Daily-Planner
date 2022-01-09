var t = 9
// display current time
const now = moment()
const readable = now.format ("MMM Do YYYY")
document.getElementById ("currentDay").innerHTML =readable

function checkTime() {
    var d = new Date ()
    var currentTime = d.getHours ()
    return currentTime}
// creating the timeblocks 
function saveTostorage(timeBlock, event) {
    localStorage.setItem (timeBlock, event)
    
}
function getsavedValue(v) {
    if (!localStorage.getItem(v)){
        return ""
    }
    localStorage.getItem (v)
}


for(var i=0; i<9; i++){    

    var container = document.getElementById("cont");
    var row = document.createElement("div");
    row.setAttribute("class","row");
    container.appendChild(row);

    if(t<=12){
        theTime = t + " AM";
        var time = document.createElement("p");
        row.appendChild(time);
        time.setAttribute("class","time");
        var hour = document.createTextNode(theTime);
        time.appendChild(hour);
    }
    else {
        theTime = t-12 + " PM";
        var time = document.createElement("p");
        row.appendChild(time);
        time.setAttribute("class","time");
        var hour = document.createTextNode(theTime);
        time.appendChild(hour);
    }

    var input = document.createElement("input");
    row.appendChild(input);
    input.setAttribute("class","input");
    
    var button = document.createElement("button");
    button.setAttribute("class","saveBtn");
    button.innerHTML = '<i class="fas fa-lock"></i>'

    row.appendChild(button);
    
    var currentTime = checkTime ()

    // add color coding 
    if (t < currentTime) {
        input.style.backgroundColor = "gray"
        input.disabled = true
        button.disabled = true
    }
    else if (t == currentTime) {
        input.style.backgroundColor = "red"
        
    }

    else if (t > currentTime) {
        input.style.backgroundColor = "#90EE90"
        

    }
    
    t++;

}

$(document).ready(function(){
    $(".saveBtn").click(function(){
        var event = $(this).prev()
        var timeBlock = event.prev ()
        var e = event.val ()
        var tb = timeBlock.text ()
        saveTostorage (tb, e)

    })
})