window.addEventListener("load", function() {
	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		
		var resultado = new Persona(nombre,edad,sexo);
		document.getElementById("resultado").innerHTML = resultado.saludo();
		
	});

	function Persona(nombre,edad,sexo){
		this.nombre = nombre;
		this.sexo = sexo;
		this.edad = edad;
		this.mayorDeEdad = (this.edad>=18)
		Persona.prototype.saludo = function(){
			return "Hola mi nombre es "+ this.nombre +" , "+ " tengo "+ this.edad +" años "+ 
			" y soy "+ ((this.mayorDeEdad) ? "mayor" : "menor") +" de edad." 
		}  
	}	
});

