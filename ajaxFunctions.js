/**
 * Uses AJAX to query an internet data source for exchange rate
 * @param {string} zipId The element id that has the zip code
 */
function findExchangeRate(rateId) {
    // First get the zip code from the HTML textbox
    //var rate = document.getElementById(rateId).value;
    var currency = "CZK";
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                //displayRate(this.responseText);
                console.log(this.responseText)
            }
            else if (this.status === 404) {
                // No postal code found
                //displayRate('{ "rate" : "none" }');
                console.log("no rate found");
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "http://api.fixer.io/latest?base=USD&symbols=" + currency;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the exchange rate given the JSON data
 * @param {string} data JSON data representing place for given exchange rate
 */
function displayRate(data) {
    var rate = JSON.parse(data);
    if (place.country === "none") {
        document.getElementById("").className = "alert alert-warning";
        document.getElementById("").innerHTML = "CHANGE THIS";
    }
    else {
        document.getElementById("place").className = "alert alert-success";
        document.getElementById("place").innerHTML = "change this";
    }
}

// button
