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



var materiales= [
{
"id": 1,
"name": "PET",
"description": "Plástico #1 - PET",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Plastic-recyc-01.svg/200px-Plastic-recyc-01.svg.png",
"created_at": "2017-01-16T17:32:39.979Z",
"updated_at": "2017-01-16T17:32:39.979Z",
"url": "http://10.77.3.77:3000/materials/1.json"
},
{
"id": 2,
"name": "PE-HD",
"description": "Plástico #2 - PE-HD",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Plastic-recyc-02.svg/200px-Plastic-recyc-02.svg.png",
"created_at": "2017-01-16T17:34:40.214Z",
"updated_at": "2017-01-16T17:34:40.214Z",
"url": "http://10.77.3.77:3000/materials/2.json"
},
{
"id": 3,
"name": "PVC",
"description": "Plástico #3 - PVC",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Plastic-recyc-03.svg/200px-Plastic-recyc-03.svg.png",
"created_at": "2017-01-16T17:35:18.437Z",
"updated_at": "2017-01-16T17:35:18.437Z",
"url": "http://10.77.3.77:3000/materials/3.json"
},
{
"id": 4,
"name": "PE-LD",
"description": "Plástico #4 - PE-LD",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Plastic-recyc-04.svg/200px-Plastic-recyc-04.svg.png",
"created_at": "2017-01-16T18:40:22.640Z",
"updated_at": "2017-01-16T18:40:22.640Z",
"url": "http://10.77.3.77:3000/materials/4.json"
},
{
"id": 5,
"name": "PP",
"description": "Plástico #5 - PP",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Plastic-recyc-05.svg/200px-Plastic-recyc-05.svg.png",
"created_at": "2017-01-16T18:46:06.789Z",
"updated_at": "2017-01-16T18:46:06.789Z",
"url": "http://10.77.3.77:3000/materials/5.json"
},
{
"id": 6,
"name": "PS",
"description": "Plástico #6 - PS",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plastic-recyc-06.svg/200px-Plastic-recyc-06.svg.png",
"created_at": "2017-01-16T18:46:55.495Z",
"updated_at": "2017-01-16T18:46:55.495Z",
"url": "http://10.77.3.77:3000/materials/6.json"
},
{
"id": 7,
"name": "Otros plásticos",
"description": "Plástico #7 - Otro",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plastic-recyc-07.svg/200px-Plastic-recyc-07.svg.png",
"created_at": "2017-01-16T18:47:48.154Z",
"updated_at": "2017-01-16T18:47:48.154Z",
"url": "http://10.77.3.77:3000/materials/7.json"
},
{
"id": 8,
"name": "Vidrio",
"description": "Vidrio",
"image": "",
"created_at": "2017-01-16T18:49:59.303Z",
"updated_at": "2017-01-16T18:49:59.303Z",
"url": "http://10.77.3.77:3000/materials/8.json"
},
{
"id": 9,
"name": "Cartón",
"description": "Cartón",
"image": "",
"created_at": "2017-01-16T18:50:42.839Z",
"updated_at": "2017-01-16T18:50:42.839Z",
"url": "http://10.77.3.77:3000/materials/9.json"
},
{
"id": 10,
"name": "Papel",
"description": "Papel",
"image": "",
"created_at": "2017-01-16T18:50:56.371Z",
"updated_at": "2017-01-16T18:50:56.371Z",
"url": "http://10.77.3.77:3000/materials/10.json"
},
{
"id": 11,
"name": "Metal",
"description": "Latas y metales",
"image": "",
"created_at": "2017-01-16T18:51:31.343Z",
"updated_at": "2017-01-16T18:51:31.343Z",
"url": "http://10.77.3.77:3000/materials/11.json"
}
]
});

