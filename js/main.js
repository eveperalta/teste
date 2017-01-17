//input-file
$(document).ready(function(){

 $(function() {
  $('#file-input').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);
     }
    });


   $("button").on("click", function(e){
	
			if(!validateForm()){
				console.log("go fish")
				e.preventDefault();
			}
		});
function validateForm(){

	if(validarCampoTexto($("#producto")) == false){
		return false
	}
	if(validarTextArea1($("#textarea1"))== false){
		return false
	}
	if(validarTextArea2($("#textarea2"))== false){
		return false
	}
	return true;
}

function validarCampoTexto(input){
	var bool = true;

	if($("#producto").val() == ""){
		$("#producto").attr('placeholder', "Este campo es obligatorio");
		bool = false
	}else{
		console.log("ok")
		}
		return bool
	};
	

function validarTextArea1(textarea){
	var bool = true;

	if($("#textarea1").val() == ""){
		$("#textarea1").attr('placeholder', "Campo obligatorio");
		bool = false
	}else{
		console.log("ok")
	}
	return bool
};
function validarTextArea2(textarea){
	var bool = true;

	if($("#textarea2").val() == ""){
		$("#textarea2").attr('placeholder', "Campo obligatorio");
		bool = false
	}else{
		console.log("ok")
	}
	return bool
};


});

