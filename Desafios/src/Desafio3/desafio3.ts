

let refreshSale = document.getElementById('refresh-sale');
let refreshButton = document.getElementById('clear-sale')!;
let sum = document.getElementById('sum')! as HTMLInputElement;
let fieldSale = document.getElementById('field-sale');

let totalSale = 0

clearSale()

function sumOfSale(sum:number) {
    if(fieldSale){
        totalSale += sum
        fieldSale.innerHTML = totalSale.toString()
    }
}

function clearSale() {
    if(fieldSale){
        totalSale = 0
        fieldSale.innerHTML = totalSale.toString()
    }
}
if(refreshSale){
    refreshSale.addEventListener('click', function () {
        sumOfSale(Number(sum.value));
    });
}

if(refreshButton){
    refreshButton.addEventListener('click', function () {
        clearSale();
    });
}