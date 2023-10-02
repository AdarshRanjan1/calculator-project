let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

if(calculation){
    displayResult();
}

function displayResult(){
    document.querySelector('.js-result').innerHTML = `${calculation}`;
}

function updateCalculation(option){
    calculation += option;
    displayResult();
    localStorage.setItem('calculation',JSON.stringify(calculation));
} 