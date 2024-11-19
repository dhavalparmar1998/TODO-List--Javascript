var inputbox = document.getElementById("input-box");
var listcontainer = document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ""){
        alert("You Must Write A Task")
    }
    else {
        var litag =document.createElement("li");
        litag.innerHTML = inputbox.value;
        listcontainer.appendChild(litag);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        litag.appendChild(span);



    } 
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata()

    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata()

    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
    

}
showtask();