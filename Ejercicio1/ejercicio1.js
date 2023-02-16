
var contador = 0
var contador40 = 0
var contador50 = 0
var contador60 = 0

var acumulador = 0
var acumulador40 = 0
var acumulador50 = 0
var acumulador60 = 0

const e = document.querySelector('#peso');
const log = document.getElementById('menos40');
const log40 = document.getElementById('mas40');
const log50 = document.getElementById('mas50');
const log60 = document.getElementById('igual60');

const acumulado = document.getElementById('promedio');
const acumulado40 = document.getElementById('promedio40');
const acumulado50 = document.getElementById('promedio50');
const acumulado60 = document.getElementById('promedio60');

const total = document.getElementById('total');
const promediototal = document.getElementById('promediototal')


function updateValue() {
    if(e.value < 1 || e.value >= 120 ){
        alert("No se ha introducido un peso valido");
    }
    else if(e.value < 40){
        contador = contador + 1
        acumulador = acumulador + Number(e.value) 
    }
    else if(e.value >= 40 && e.value <= 50){
        contador40 = contador40 + 1
        acumulador40 = acumulador40 + Number(e.value) 
    }
    else if(e.value > 50 && e.value < 60){
        contador50 = contador50 + 1
        acumulador50 = acumulador50 + Number(e.value) 
    }
    else if(e.value >= 60 && e.value <= 119){
        contador60 = contador60 + 1
        acumulador60 = acumulador60 + Number(e.value) 
    }
        
        log.textContent = contador;
        log40.textContent = contador40;
        log50.textContent = contador50;
        log60.textContent = contador60;

        acumulado.textContent = Number(acumulador/contador).toFixed(2);
        acumulado40.textContent = Number(acumulador40/contador40).toFixed(2);
        acumulado50.textContent = Number(acumulador50/contador50).toFixed(2);
        acumulado60.textContent = Number(acumulador60/contador60).toFixed(2);

        total.textContent = Number(log.textContent)+Number(log40.textContent)+Number(log50.textContent)+Number(log60.textContent);
        promediototal.textContent = ((Number(acumulado.textContent)+Number(acumulado40.textContent)+Number(acumulado50.textContent)+Number(acumulado60.textContent))/4).toFixed(2);


}

function borrar(){
    log.textContent = 0;
    log40.textContent = 0;
    log50.textContent = 0;
    log60.textContent = 0;

    acumulado.textContent = 0
    acumulado40.textContent = 0
    acumulado50.textContent = 0
    acumulado60.textContent = 0

    total.textContent = 0
    promediototal.textContent = 0
}
  