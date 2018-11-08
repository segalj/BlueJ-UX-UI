let APIManager = function(rankingAddress = '', indexingAddress = '') {
    this.rankingAddress = rankingAddress;
    this.indexingAddress = indexingAddress;
};

APIManager.prototype.setRankingAddress = function(address) {
    this.rankingAddress = address;
};

APIManager.prototype.setIndexingAddress = function(address) {
    this.indexingAddress = address;
};

APIManager.prototype.getDocument = function(docID) {
    let headerInit = {
        Content-Type : 'application/json',
        Accept-Charset : 'utf-8'
    };
    let header = new Headers(headerInit);
    let requestInit = {
        method : 'GET',
        headers : header
    };
    let request = new Request(this.rankingAddress, requestInit);
    // Not sure if this is correct. Working on this
    // fetch(request).then(function(response) {return respons.json()})
};

APIManager.prototype.searchRequest = function(queryInfo) {
};

APIManager.prototype.sendQueryFeedback = function(docID) {
};