$(document).ready(function(){
	$("#search").keyup(function(event) {
		$.ajax({
			url: 'http://162.243.136.119:8080/search.json',
			data: {q: $("#search").val()},
			success: function(products){
				console.log(products);
				$("#recent").html(" ");
				products.forEach(function(product){
					$("#recent").append(template("product-template", product));
					$("#suggest").addClass('hidden');
				});
			}
		})
	});
});

window.template = function(templateName, context){
	var html = $ ("#" + templateName).html();

	for(var p in context){
		if(!context.hasOwnProperty(p)){
			continue;
		}
		html = html.replace(new RegExp(':' + p, 'g'), context[p]);
	}
	return $(html);
};

//modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');
    $('.modal').modal({
    	dismissible: true, 
    	opacity: .5,
    	in_duration: 300, 
    	out_duration: 200, 
    	starting_top: '4%', 
    	ending_top: '10%', 
    	ready: function(modal, trigger) { 
    		console.log(modal, trigger);
    	},
    });
});
//modal