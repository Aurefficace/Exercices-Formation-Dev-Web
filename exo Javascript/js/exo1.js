//var tab= ['A','B','C'];
// console.log(tab);
// var tab2= tab;
// tab2 [1]= 'e';
// console.log (tab,tab2);

// var prenom= ("Julie");
// var nom= ("Dupont");
// console.log(`Bonjour ${prenom} ${nom}`);

// var nombre1= 10;
// var nombre2= 5;
// var total= addition(nombre1,nombre2);
// function addition (x,y){
// 	return (x+y)
// };
// console.log (total);



// var nombre= prompt('Entrez un chiffre entre 1 et 10');
// var saisie=5;
// if (nombre<=saisie) {
// 	console.log(`le chiffre est <= ${saisie}`);
// }
// else{
// 	console.log(`le chiffre est > ${saisie}`);
// };

// var nombremax=10;
// var saisie;
// saisie=prompt('saisir un nombre entre 1 et 10');
// while(saisie>10 || saisie<=0){
// 	saisie=prompt('saisir un nombre entre 1 et 10');
// }
// alert('bravo');

// var x= Array('A','B','C');
// for (var i = 0; i < x.length; i++) {
// 	console.log(x[i]);
// }

// var i=4;//variable globale
// var tab1=["A","B","C"];
// var tab2=["D","E","F"];
// console.log(i);
// afficheTab(tab1);
// afficheTab(tab2);
// console.log(i);

// function afficheTab (x){
// 	for (var i = 0; i < x.length; i++) { //ici i est une variable locale
// 		console.log(x[i]);
// 	}
// }
// var tab = [];
// var cumul = 0;


// for (var i = 0; i < 10; i++) 
// {
// 	tab[i] = prompt('Entrez vos notes');
// 	cumul
// }

// console.log(tab)

// function addition (x,y){
// 	return (x+y);
// }


// var note1= Number (prompt('Entrez la note1'));
// var note2= Number (prompt('Entrez la note2'));
// var somme= (note1) + (note2);
// console.log(somme);
// var moyenne= somme/2;
// console.log(moyenne);

// var cumulNotes=0;
// cumulNotes= cumulNotes+Number(prompt('entre ta note'));
// cumulNotes= cumulNotes+Number(prompt('entre ta note'));
// console.log (cumulNotes/2);

// var nombreNotes=Number(prompt('Combien de notes as tu?'));
// var cumulNotes=0;
// for (var i = 1; i <=nombreNotes; i++) {cumulNotes=cumulNotes+Number(prompt('Entre ta note' + i))}
// console.log(cumulNotes/nombreNotes);

// var nomDomaine= prompt('Quel est votre nom de domaine?');
// var tab= nomDomaine.split('.');
// console.log(tab[tab.length-1]);

// var tab= Array(12,17,15,8,11,7,5,14,9);
// var inferieur=0;
// var superieur=0;
// for (var i = 0; i < tab.length; i++) {
// 	if (tab[i]<10) {
// 		inferieur++;
// 	}
// 	else {
// 		superieur++;
// 	}
// }
// console.log(inferieur,superieur); //afficher les notes inferieures et superieures a 10



// var nombresaisi=Number(prompt('Nombre de note')); //combien de notes a saisir
// var tab= new Array(); //creation d'un nouveau tableau vide
// var inferieur=0;
// var superieur=0;


// for (var i = 0; i <nombresaisi; i++) //lire jusqu'au nombre de notes
// 	{var notessaisies= Number(prompt('Entrez votre note')); //demander de saisir en fonction du nombre de notes
// 	tab.push(notessaisies);	//ajouter au tableau les notes saisies

// 	if (tab[i]<10) { 
// 		inferieur++;//si les notes sont sous 10 ajouter 1 
// 	}
// 	else {
// 		superieur++; //si les notes sont plus de 10 ajouter 1
// 	}
// // }
// console.log(tab);
// console.log(inferieur,superieur);



// var nombre1;
// var nombre2;
// var operation;
// var nombreessais= 0;

// while((operation != '+') && (operation !='*') && (operation !='/') && (operation !='-')){
// 	(operation = prompt('Saisir une operation + - * ou /'));
// 	nombreessais++;
// 	if (nombreessais==3) {
// 	alert ('Tes bennet ou quoi?');
// }
// };
// 	nombre1= Number(prompt('Saisir un premier nombre'));
// 	nombre2= Number(prompt('Saisir un second nombre'));

// if (operation=='+') {
// 	add (nombre1,nombre2);
// } else {
// 	if (operation=='-') {
// 		sub (nombre1, nombre2);
// 	} else {
// 		if (operation=='*') {
// 			multiply (nombre1, nombre2);
// 		} else {
// 			div (nombre1, nombre2);
// 		}
// 	}
// }
// function add (a,b){
// 	alert (a+b);
// }
// function sub (a,b){
// 	alert (a-b);
// }
// function multiply (a,b){
// 	alert (a*b);
// }
// function div (a,b){
// 	alert (a/b);
// }





// var chien1 = {
// 	color:"marron",
// 	nbPattes:4,
// 	name:"Jean-Mich",
// 	race:"Bouvier Bernois",
// 	laisse: {color:"rouge"},
// 	parler: function(x)
// 	{alert("Bonjour"+ x + " je m'appele " + this.name)}
// }
// var chien2= {
// 	color:"blanc",
// 	nbPattes:4,
// 	name:"Rambo",
// 	race:"Tequel malgache",
// 	parler: function(x)
// 	{alert("Bonjour "+ x + " je m'appele " + this.name)}
// }

// var listChiens= [chien1,chien2];
// for (var i = 0; i < listChiens.length; i++) {
// 	console.log(listChiens[i].name)
// }
// chien1.parler(chien2.name);
// alert(chien1.laisse.color);



// var chien1 = new Chien ('Rambo','noir');
// var chien2 = new Chien ('Rocky','blanc');
// function Chien(a,b){
// 	this.name= a;
// 	this.color= b;
// 	this.parler= function (x){
// 		alert('Bonjour '+ x + 'je suis ' + this.name);
// 	}
// }
// console.log(chien1.name);
// chien2.parler('Philipierre ');



// var nombreAleatoire= entierAleatoire(0,100);
// console.log(nombreAleatoire);
// var tab=[];	
// var nombreSaisi= Number(prompt('Saisir un nombre entre 0 et 100'));
// tab.push(nombreSaisi);
// while (nombreSaisi!=nombreAleatoire){

// 	if (nombreSaisi>nombreAleatoire) {
// 		nombreSaisi = Number(prompt('Saisir un nombre plus petit'));
// 	} else {
// 		nombreSaisi = Number(prompt('Saisir un nombre plus grand'));
// 	}
// 		tab.push(nombreSaisi);
// }
// for (var i = 0; i < tab.length; i++) {
// 		console.log(tab[i]);
// 	}
// alert('Bravo tu  trouvé en'+tab.length);

// function entierAleatoire(min, max)
//    {
//     return Math.round(Math.random() * (max - min + 1)) + min;
//    }


// var tab=['Hortense|500','Hortense|300','Ludovina|25','Ludovina|50'];
// var tab2= [];
// total=0;
// for (var i = 0; i < tab.length; i++) {
// 	tab2= tab[i].split('|');
// 	total=total+Number(tab2[1]);
// }

// console.log(total);

// var tab=[['a','b'],['c','d']];
// var tab2=[];
// for (var i = 0; i < tab.length; i++) {
// 	console.log(tab2=tab[i]);
// 	for (var g = 0; g < tab2.length; g++) {
// 		console.log(tab2[g]);
// 	}
// }



// var chat1={
// 	color: "black",
// 	name: "Michel",
// 	// ditBonjour: function(nom)
// 	// {alert(`Bonjour ${nom} je m'apelle ${this.name}`)},
// 	laisse:{
// 		color:"blue",
// 	}
// }
// var chat2={
// 	color: "white",
// 	name: "Jacquie",
// }
// // chat1.ditBonjour(chat2.name);
// // alert (chat1.laisse.color);

// function Chat(a,b){
// 	this.name= a;
// 	this.color= b;
// 	this.ditBonjour= function(x){
// 	alert(`Bonjour ${x} je m'apelle ${this.name}`);
// 	}
// }

// var chat3= new Chat('Merci','marron'); 



// var nombre1;
// var nombre2;
// var operation;
// var nombreessais= 0;

// while((operation != '+') && (operation !='*') && (operation !='/') && (operation !='-')){
// 	(operation = prompt('Saisir une operation + - * ou /'));
// 	nombreessais++;
// 	if (nombreessais==3) {
// 	alert ('Tes bennet ou quoi?');
// }
// };

// nombre1= Number(prompt('Saisir un premier nombre'));
// nombre2= Number(prompt('Saisir un second nombre'));
// operation1=new Operations(nombre1,nombre2)

// if (operation=='+') {
// 	operation1.add (nombre1,nombre2);
// } else {
// 	if (operation=='-') {
// 		operation1.sub (nombre1, nombre2);
// 	} else {
// 		if (operation=='*') {
// 			operation1.multiply (nombre1, nombre2);
// 		} else {
// 			operation1.div (nombre1, nombre2);
// 		}
// 	}
// }

// function Operations(a,b){
// 	this.add=
// 		function add (a,b){	alert (a+b);}
// 	this.sub=
// 		function sub (a,b){	alert (a-b);}
// 	this.multiply=
// 		function multiply (a,b){	alert (a*b);}
// 	this.div=
// 		function div (a,b){	alert (a/b);}
// }




// window.onload= function (){
// var id1=document.getElementById('id1');
// id1.onclick= function(e) {
// 	bonjour('Jean Mouloud tu as cliqué sur ' + e.target.id);
// }
// var id2=document.getElementById('id2');
// id2.addEventListener('click',function(e){
// 	bonjour('Jean Mouloud tu as cliqué sur ' + e.target.id)},false);
// }
// function bonjour(x){
// 	alert('Bonjour '+x);
// 	console.log('Tu as bien cliqué mon vieux');
// }


// window.onload= function (){
// var parent=document.getElementById('parent');
// parent.addEventListener('click',function(e){alert('Jean Mouloud tu as cliqué sur ' + e.target.id +' et tu es sur ' + e.currentTarget.id)},false);
// var enfant=document.getElementById('enfant');
// enfant.addEventListener('click',function(e){alert('Jean Mouloud tu as cliqué sur '+ e.target.id +' et tu es sur ' + e.currentTarget.id);e.stopPropagation();},false);
//on teste la propagation des evenements qui passe de l'enfant au parent avec False et inversemement avec True, pour arreter la propagation aux parents il faut ajouter e.stopPropagation dans la fonction (e)





// window.onload= function (){
// var id1=document.getElementById('id1');
// id1.addEventListener('mouseover',function(e){id1.src="img/cross.svg";},false);
// id1.addEventListener('mouseout',function(e){id1.src="img/hamburger.png";},false);
// }
//la source de l'image va changer en passant dessus (mouseover) et va revenir normale en partant (mouseout)



// window.onload= function (){
// var blue=document.getElementById('blue');
// var red=document.getElementById('red');
// var green=document.getElementById('green');

// blue.addEventListener('click',function(e){texte.style.color="blue",texte.style.border="2px solid blue",texte.style.backgroundColor="rgba(159,168,218 ,1)",result.innerHTML="Vous avez cliqué sur Bleu",result.style.backgroundColor="rgba(159,168,218 ,1)",result.style.color="blue";},false);

// red.addEventListener('click',function(e){texte.style.color="red",texte.style.border="2px solid red",texte.style.backgroundColor="rgba(229,115,115 ,1)",result.innerHTML="Vous avez cliqué sur Rouge",result.style.backgroundColor="rgba(229,115,115 ,1)",result.style.color="red";},false);

// green.addEventListener('click',function(e){texte.style.color="green",texte.style.border="2px solid green",texte.style.backgroundColor="rgba(129,199,132 ,1)",result.innerHTML="Vous avez cliqué sur Vert",result.style.backgroundColor="rgba(129,199,132 ,1)",result.style.color="green";},false);
// //quand on clique sur red blue green les styles changent
// }



// // window.onload= function (){
// var color=document.getElementById('color');
// var colorclick=document.getElementById('colorclick');
// var resultat=document.getElementById('resultat');

// colorclick.addEventListener('click', function(e){
// 	resultat.innerHTML="La couleur est : "+getComputedStyle(color).backgroundColor;
// },false);
// // en cliquant sur "colorclick" on obtient dans "resultat" la background color de "color"
// }



// window.onload= function (){
// var change=document.getElementById('changewithclass');
// change.addEventListener('click',function(e){change.classList.toggle('blueclass');},false);
// }



// window.onload= function (){

// var colorchange=document.getElementsByClassName('classe_couleur');
// var click_red=document.getElementById('click_red');
// var click_green=document.getElementById('click_green');
// var click_blue=document.getElementById('click_blue');

// click_red.addEventListener('click', function(e){
// 	for (var i = 0; i < colorchange.length; i++) {
// 		colorchange[i].style.backgroundColor='red';
// 	} 
// },false);
// click_blue.addEventListener('click', function(e){
// 	for (var i = 0; i < colorchange.length; i++) {
// 		colorchange[i].style.backgroundColor='blue';
// 	}
// },false);
// click_green.addEventListener('click', function(e){
// 	for (var i = 0; i < colorchange.length; i++) {
// 		colorchange[i].style.backgroundColor='green';
// 	}
// },false);



// }


// window.onload= function (){
// var newLink=document.createElement('a');
// newLink.href='https://www.google.fr';
// document.getElementById('children').appendChild(newLink);
// daddy.addEventListener('click', function(e){children.innerHTML=newLink;},false);
// }



// window.onload= function (){

// var i=2;
// var id1=document.getElementById('id1');

// id1.addEventListener('click', 
// 	function(e){
// 	var newDiv= document.createElement('div');
// 	newDiv.id=`id${i}`;
// 	newDiv.innerHTML=`element${i}`;
// 	x 
// 	newDiv.addEventListener('click', function(e){
// 	document.getElementById('section').removeChild(newDiv)},
// 	false);
// 	i++;})
// }


// window.onload= function (){

// window.addEventListener('keydown',
// 	function(e){
// 				if(e.keyCode==39){
// 			document.getElementById("manu").style.left = document.getElementById('manu').offsetLeft + 10 + 'px';
// 		}
// 				if(e.keyCode==40){
// 			document.getElementById("manu").style.top = document.getElementById('manu').offsetTop + 10 + 'px';
// 		}
// 				if(e.keyCode==37){
// 			document.getElementById("manu").style.left = document.getElementById('manu').offsetLeft - 10 + 'px';
// 		}
// 				if(e.keyCode==38){
// 			document.getElementById("manu").style.top = document.getElementById('manu').offsetTop - 10 + 'px';
// 		}
// 				if(e.keyCode==32){
// 			document.getElementById("couille").play("mortecouille.mp3"); 
// 			var crs=document.createElement('img');
// 			crs.src="img/crs.png";
// 			crs.style.position="relative";
			

	
// 				} 


// 	}); 




// }



window.onload= function (){



var tabImages = ["slide1.jpg","slide2.jpg","slide3.jpg"];
var indiceTabImages = 0;
var time = setInterval(function(){changeImage()},2000);

function changeImage(){
	document.getElementById("slider").style.backgroundImage="url('img/"+tabImages[indiceTabImages]+"')";
	indiceTabImages++;
	if (indiceTabImages==tabImages.length) {
		indiceTabImages=0;
	}
}





}

