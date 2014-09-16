var xmlhttp = new XMLHttpRequest();
var url = "";

function process(arr) {
    var out = "";
    var i;
    arr = arr.items
    for(i = 0; i < arr.length; i++) {
        out += arr[i].description + ", done: " + arr[i].done + '<br>'
    }

    console.log(out)
    $('#results').html(out);
}

$("#submit").on("click", function() {
    url = $('#url').val()

    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        process(myArr);
    }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


})

