var panda1 = document.getElementById("img1");
var panda2 = document.getElementById("img2");
var panda3 = document.getElementById("img3");
var panda4 = document.getElementById("img4");
var par1 = document.getElementById("p1");
var par2 = document.getElementById("p2");

var botonCerrar = document.getElementsByClassName("box-Im");
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

//Botones intermedios y párrafos

var botonOrigen=document.getElementById("origenTxt")
botonOrigen.addEventListener("click", origenMosOc);

function origenMosOc() { 
	par1.style.display = "none";
}

var botonExtincion=document.getElementById("extincionTxt")
botonExtincion.addEventListener("click", extincionMosOc);

function extincionMosOc() { 
	par2.style.display = "none";
}