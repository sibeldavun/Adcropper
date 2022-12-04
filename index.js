var element = document.getElementById("csd");
element.addEventListener("click", function(){
    
    var givenDiv = document.getElementById("fd");

    var parentDiv = document.getElementById("container");
    parentDiv.removeChild(givenDiv);
    parentDiv.appendChild(givenDiv)
})
var element = document.getElementById("returnToSingIn");
element.addEventListener("click",function(){
    
    var givenDiv = document.getElementById("sd");

    var parentDiv = document.getElementById("container");
    parentDiv.removeChild(givenDiv);
    parentDiv.appendChild(givenDiv)
})