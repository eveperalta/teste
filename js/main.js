//input-file
$(document).ready(function(){
	$("#file-input").on("change", function (evento){
	//recuperar archivo subido
	var archivo= $ (this)[0].files[0];
	//crear file reader, es un objeto de JS para leer archivos
	var reader = new FileReader();
	//decrile al fr que hacer cuando termine de cargar
	reader.onload = function(efr){
		$("#file-input img").attr("src", efr.target.result);
	}
	//cargar la imagen
	reader.readAsDataURL(archivo);

});
})
