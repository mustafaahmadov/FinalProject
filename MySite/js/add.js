$(document).ready(function() {

    document.getElementById('addButton').addEventListener('click', function(e) {
        e.preventDefault();
        let inputValue = document.getElementById('inp1').value;
        parseInt(inputValue);
        inputValue++;
        document.getElementById('inp1').value = inputValue;
    })
})