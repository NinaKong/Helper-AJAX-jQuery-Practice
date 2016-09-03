function readData() {
$.get('data/data.txt', sucessData);
$('#readData').load('data/data.html');
$('#readData').load('data/data.html #div2');
}
function sucessData(output) {
console.log("Success!");
$("readData").append(output);
}
function errorData(error) {
console.log("Error!");
albert(error);
}
$('document').ready(function() {
readData();
});