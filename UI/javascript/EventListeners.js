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
		var api = new APIManager("http://green-x.cs.rpi.edu:5000/search?query=", "http://green-z.cs.rpi.edu/");
		//console.log(api);
		if(inputElem.value){
			api.searchRequest(inputElem.value);
		}
	}
}

let updateResults=function(pages, start, end){
	var i;
	for(i=start; i<end; i++){
		//put in code to get snippets here
	}
}
