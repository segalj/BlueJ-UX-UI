window.onload=function(){

	var inputElem = document.getElementById("SearchBar");

	if(inputElem){
		inputElem.addEventListener('keyup', function(event){
			if(event.keyCode===13){
				runQuery();
			}
		});
	}

	function runQuery(){
		var api = new APIManager("http://blue-y.cs.rpi.edu:8080/ranking?query=", "http://green-z.cs.rpi.edu/");
		//console.log(api);
		if(inputElem.value){
			var result=api.searchRequest(inputElem.value);
			console.log(result);

			var doc=api.getDocument(6);
			console.log(doc);
		}
	}
}

