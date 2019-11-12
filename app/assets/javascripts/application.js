// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
        function mudarCorFundo() {
		    var elem = document.querySelectorAll("li, nav, header, main, div, ul, body, footer, section, button, label, a");
			for(var i=0 ; i < elem.length; i++){
				elem[i].style.backgroundColor = "black";
			}
        }
				
        function mudarCorTexto() {
		    var texto = document.querySelectorAll("p, h1, h2, h3, strong, table, label");
			for(var i=0 ; i < texto.length; i++){
				texto[i].style.color = "white";
			}
        }
		
        function mudarCorLink() {
		    var link = document.querySelectorAll("a, li, button, header");
			for(var i=0 ; i < link.length; i++){
				link[i].style.color = "yellow";
			}
        }
			
				
		
        function mudarCor(){
            mudarCorFundo();
			mudarCorTexto();
			mudarCorLink();
        }
		
		
		function criarEvento(){
            document.querySelector("#bt_contraste").addEventListener("click",function(){
                mudarCor();
            })
        }
        

		//-------------------------------------------------------------
		
        function maiorP() {
		    var maior = document.querySelectorAll("p, table, label, li");
			for(var i=0 ; i < maior.length; i++){
				maior[i].style.fontSize = "1.35em";
			}
        }
		
		function maiorH1s() {
		    var maiorh1 = document.querySelectorAll("h1, h2");
			for(var i=0 ; i < maiorh1.length; i++){
				maiorh1[i].style.fontSize = "2em";
			}
        }
		
		function maiorH3s() {
		    var maiorh3 = document.querySelectorAll("h3");
			for(var i=0 ; i < maiorh3.length; i++){
				maiorh3[i].style.fontSize = "1.75em";
			}
        }
		
	    function mudarMaior(){
            maiorP();
			maiorH1s();
			maiorH3s();
        }

		
		function aumentarFonte(){
            document.querySelector("#bt_maior").addEventListener("click",function(){
                mudarMaior();
            })
        }
        		
		
				//---------------------------------------------------------------------------------------
		
		
        function menorP() {
		    var menor = document.querySelectorAll("p, table, label, li");
			for(var i=0 ; i < menor.length; i++){
				menor[i].style.fontSize = "1em";
			}
        }
		
		function nav() {
		    var menornav = document.getElementsByClassName("menu");
			for(var i=0 ; i < menornav.length; i++){
				menornav[i].style.fontSize = "1em";
			}
        }
		
		function menorHs() {
		    var menosh = document.querySelectorAll("h1, h2");
			for(var i=0 ; i < menosh.length; i++){
				menosh[i].style.fontSize = "1.25em";
			}
        }
		
		function menorH3s() {
		    var menorh3 = document.querySelectorAll("h3");
			for(var i=0 ; i < menorh3.length; i++){
				menorh3[i].style.fontSize = "1em";
			}
        }
		
				
        function mudarMenor(){
            menorP();
			menorHs();
			menorH3s();
			nav();
        }
		
		function diminuirFonte(){
			console.log('diminui Fonte');
			document.querySelector("#bt_menor").addEventListener("click",function(){
                mudarMenor();
            })
			
        }
		
		function main() {
			criarEvento();
			aumentarFonte();
			diminuirFonte();
		}
			
        
        window.onload = main;