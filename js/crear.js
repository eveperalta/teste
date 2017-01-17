$(document).ready(function(){
	$(".boton-agregar").click(function(event) {
		$(".error").remove();
		if($("#producto").val()==""){
			$("#producto").focus().after("<span class='error'>Ingrese producto</span>");
			alert("ingrese producto")
		}
	});
})