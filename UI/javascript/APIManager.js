class APIManager{
 	constructor(rankingAddress = '', indexingAddress = '') {
    	this.rankingAddress = rankingAddress;
    	this.indexingAddress = indexingAddress;
	}

	setRankingAddress(address) {
    	this.rankingAddress = address;
	};

	setIndexingAddress(address) {
    	this.indexingAddress = address;
	};

	getDocument(docID) {
		
	};

	searchRequest(queryInfo) {
		const Http = new XMLHttpRequest();
		const url=this.rankingAddress + queryInfo;
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
			//console.log(Http.responseText);
			let obj = JSON.parse(Http.responseText);
			//console.log(obj);
			if(obj.pages.length<10){
				updateResults(obj.pages, 0, obj.pages.length);
			}
			else{
				updateResults(obj.pages, 0, 10);
			}
		}
	};

	sendQueryFeedback(docID) {
	};
}