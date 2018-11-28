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
    	<?php
    	$servername = this.indexingAddress;
		$username = "querying";
		$password = "querying";
		$dbname = "index";
    	
    	$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
		} 

		$sql="Select * FROM "
    	?>;
	};

	searchRequest(queryInfo) {
		const Http = new XMLHttpRequest();
		const url=this.rankingAddress + queryInfo;
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
			console.log(Http.responseText)
		}
	};

	sendQueryFeedback(docID) {
	};
}