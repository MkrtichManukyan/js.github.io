let names = prompt("ICH E QO ANUN@ !!");

var addname  =  document.getElementById("add");
var nameblock = document.getElementById("add-div");
var clos = document.getElementById("clos");
var namesal;

clos.onclick = function(){
    
    nameblock.style.display = "none";

    names = prompt("ICH E QO NOR ANUN@ !!");

    namesall = "<p>"+ "Cer anunn e " + names + "</p>";


    addname.onclick = function(){
        
        nameblock.style.display = "block";
    
        nameblock.innerHTML = namesall;
    
    };
};

namesall = "<p>"+ "Cer anunn e " + names + "</p>";


addname.onclick = function(){
    
    nameblock.style.display = "block";

    nameblock.innerHTML = namesall;

};