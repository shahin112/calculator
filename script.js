function clearDisplay() {
    document.getElementById('display').textContent = '0';

  
}

function appendToDisplay(value) {
    const values = document.getElementById('display');
    if (values.textContent === '0') {
           values.textContent = value;
    } else if(values.textContent.length <25){

        values.textContent = values.textContent+ value;
         
    }
    else{
        console.log("over");
    }

}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Error';
    }
}
