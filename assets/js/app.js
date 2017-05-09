var panda1 = document.getElementById("img1");
var panda2 = document.getElementById("img2");
var panda3 = document.getElementById("img3");
var panda4 = document.getElementById("img4");

var botonCerrar = document.getElementsByClassName("box-Im");
console.log(botonCerrar);
var array = Array.prototype.forEach.call(botonCerrar, function (elemento){ 
	// this.style.display = "none"
	elemento.addEventListener("click",eliminaPanda);
})

// botonCerrar[0].addEventListener("click", cerrarIm);

function eliminaPanda(){
	// alert("mata panadas x.x");
	this.style.display="none";
}

function mostrarPandas() {
	panda1.style.display="flex";
	panda2.style.display="flex";
	panda3.style.display="flex";
	panda4.style.display="flex";
}

