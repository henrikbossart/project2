// loading html with javascript and ajax
function loadDoc(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

// loading html with jquery and ajax
function loadHTML(filename) {
    $('#content').load(filename);
}