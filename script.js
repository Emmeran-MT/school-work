/*Créez un jeu de « whack a mole ». 
Dans la page HTML, créez neuf images de taupes (affichez-les dans une grille 3 X 3) et une balise « p » contenant le pointage (0 au départ). 
Au départ, les taupes sont cachées et l’ordinateur sélectionne une taupe au hasard à afficher. 
Lorsque l’utilisateur clique sur la taupe, celle-ci est cachée, l’utilisateur obtient un point et une nouvelle taupe est affichée. 
Après 30 secondes de jeu, on affiche le pointage du joueur dans une alerte et on cache toutes les taupes. 
La partie est terminée. */



var point = 0;

function nombreRandom() {
	var aleatoire = Math.floor(1 + Math.random() * (9 - 1));
	return aleatoire;
}

setInterval(nombreRandom(), 100);


$("img").click(function(){
	point += 1
	$("#points").text(point);
	});

function moleSpawn(){
	
	if(nombreRandom() === 1){
	
		$("#1").show();
		setTimeout(function() {
	
		$("#1").hide();}, 
		800);
	}

	else if(nombreRandom() === 2){
		$("#2").show();
		setTimeout(function() {
	
		$("#2").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 3){
		$("#3").show();
		setTimeout(function() {
	
		$("#3").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 4){
		$("#4").show();
		setTimeout(function() {
	
		$("#4").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 5){
		$("#5").show();
		setTimeout(function() {
	
		$("#5").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 6){
		$("#6").show();
		setTimeout(function() {
	
		$("#6").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 7){
		$("#7").show();
		setTimeout(function() {
	
		$("#7").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 8){
		$("#8").show();
		setTimeout(function() {
	
		$("#8").hide();}, 
		800);
	}
	
	else if(nombreRandom() === 9){
		$("#9").show();
		setTimeout(function() {
	
		$("#9").hide();}, 
		800);
	}

}

var interval = setInterval(function(){ moleSpawn() }, 900);


setTimeout(function(){ 
alert("Vous avez obtenus " + point + " points"); $("img").hide(); clearInterval(interval);}, 
30000);


