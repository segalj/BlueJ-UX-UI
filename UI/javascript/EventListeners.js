window.onload=function(){

	var inputElem = document.getElementById("SearchBar");

	if(inputElem){
		inputElem.addEventListener('keyup', function(event){
			if(event.keyCode===13){
				runQuery();
			}
		});
	}


}

function runQuery(){
	var api = APIManager("http://blender01.cs.rpi.edu:8080/ranking?query=rpi", "TEST");
	if(inputElem.value){
		api.searchRequest(inputElem.value);
	}
}