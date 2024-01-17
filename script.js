document.addEventListener('DOMContentLoaded', function () {

        document.addEventListener('keydown', function(event) {
            if(event.key === 'Backspace'){
                clearField();
            } else if(event.key === 'Enter'){
                solve();
            } else {
                press(event);
            }
        });

        let buttons = document.querySelectorAll('.btn');
        buttons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                click(event.target.value);
             });
            });
         document.getElementById('btn-clear').addEventListener('click', function(){
            clearField();
             });
        document.getElementById('btn-equal').addEventListener('click', function(){
            solve();
    });
});

function click(value){
    document.getElementById('text-input-field').value += value;
}

function press(event){
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.', '+', '-', '*', '/'];
    keys.forEach((key) => {
        if(event.key === key){
            document.getElementById('text-input-field').value += event.key;
        }
        event.preventDefault();
    });
}

function clearField(){
    document.getElementById('text-input-field').value = '';
}

function solve(){
    let inputValue = document.getElementById('text-input-field').value;
    let result = math.evaluate(inputValue);
    document.getElementById('text-input-field').value = result;
}

