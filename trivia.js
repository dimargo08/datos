<html><head></head>
<body><table  background="canchafutbol.jpg" width="40%" heigth="90px" border="1" align="center" bordercolor="NAVY"><tbody><tr><td colspan="0"  align="CENTER" ><font face="KLINGBOLD" color="BLACK" size="6">

    <div id="pregunta"></div>
	<div id="respuestas"></div>
<input type="button"  value="Comprobar" onclick="comprobar()" style="background-color:#004080;color:#fff;size:8">

	<script>
		var preguntas = [
		"¿Cuantos años lleva el club Alianza Lima sin obtener un Campeonato Nacional?",
		"¿En que año campeono por ultima vez el club Universitario de Deportes?",
		"¿En que año el club Deportivo Municipal volvio a ascender a la primera division?",
                "¿Que Club gano el Campeonato Nacional el año 2011?",
                 "¿Que año gano por segunda vez el Campeonato Nacional el FBC Melgar ?"
		];
		var respuestas = [
		["9 años", "8 años", "6 años", "7 años"],
		["2013", "2014", "2015", "2012"],
		["2014", "2015", "2013", "2012"],
                ["Juan Aurich", "Alianza Lima", "U. San Martin", "Sporting Cristal"],
                ["2015", "2014", "2013", "2012"],
                

		];
jugar();

		var indicie_respuesta_correcta;

function jugar(){
			var indice_aleatorio = Math.floor(Math.random()*preguntas.length);


		var respuestas_posibles = respuestas[indice_aleatorio];


		var posiciones = [0,1,2,3];
		var respuestas_reordenadas = [];

		var ya_se_metio = false;
		for(i in respuestas_posibles){
			var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
			if(posicion_aleatoria==0 && ya_se_metio == false){
				indicie_respuesta_correcta =i;
				ya_se_metio = true;
			}
			respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
			posiciones.splice(posicion_aleatoria, 1);
		}

		var txt_respuestas="";
		for(i in respuestas_reordenadas){
			txt_respuestas += '<input type="radio" name="pp" value="'+i+'" ><label>'+respuestas_reordenadas[i]+'</label><br>';
		}

		document.getElementById("respuestas").innerHTML = txt_respuestas;
		document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];

}
function comprobar(){
	var respuesta = $("input[type=radio]:checked").val();

	//alert(respuesta);
	//alert(indicie_respuesta_correcta);
	if(respuesta ==indicie_respuesta_correcta){
		alert("Respuesta Correcta");
	}else{
		alert("Fallaste");
	}
	jugar();
}
	</script>
</font>
<font face="KLINGBOLD" color="black" size="6" >
</font>
</td></tr>
</tbody></table>
</body>
</html>