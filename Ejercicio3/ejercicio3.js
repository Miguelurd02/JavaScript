
const cedula = document.querySelector('#cedula');
const nombre = document.querySelector('#nombre');
const matematica = document.querySelector('#matematica');
const fisica = document.querySelector('#fisica');
const programacion = document.querySelector('#programacion');

const logM = document.getElementById('promedioM');
const logF = document.getElementById('promedioF');
const logP = document.getElementById('promedioP');

const aproM = document.getElementById('aprobadosM');
const aproF = document.getElementById('aprobadosF');
const aproP = document.getElementById('aprobadosP');

const aplaM = document.getElementById('aplazadosM');
const aplaF = document.getElementById('aplazadosF');
const aplaP = document.getElementById('aplazadosP');

const maxM = document.getElementById('maximaM');
const maxF = document.getElementById('maximaF');
const maxP = document.getElementById('maximaP');

const tod = document.getElementById('todas');
const par = document.getElementById('dos');
const un = document.getElementById('una');
const nin = document.getElementById('ninguna');

let alumnos = [];

function ingresar(){

    alumnos.push ({
        "cedula": cedula.value,
        "nombre": nombre.value,
        "matematica": Number(matematica.value),
        "fisica": Number(fisica.value),
        "programacion": Number(programacion.value),
    })
    
    console.log(alumnos);
}

function calcular(){

    var promedioM = 0;
    var acumuladoM = 0;

    var promedioF = 0;
    var acumuladoF = 0;

    var promedioP = 0;
    var acumuladoP = 0;

    var aprobadosM = 0;
    var aplazadosM = 0;

    var aprobadosF = 0;
    var aplazadosF = 0;

    var aprobadosP = 0;
    var aplazadosP = 0;

    var maximaM = 0;
    var maximaF = 0;
    var maximaP = 0;

    var todas = 0;
    var dos = 0;
    var una = 0;
    var ninguna = 0;

    alumnos.forEach(alumno => {

        acumuladoM = acumuladoM + Number(alumno.matematica);
        acumuladoF = acumuladoF + Number(alumno.fisica);
        acumuladoP = acumuladoP + Number(alumno.programacion);

        
        if (Number(alumno.matematica) >= 9.5){
            aprobadosM = aprobadosM + 1
        }
        else{
            aplazadosM = aplazadosM + 1
        }
        console.log(aprobadosM)
        console.log(aplazadosM)

        if (Number(alumno.fisica) >= 9.5){
            aprobadosF = aprobadosF + 1
        }
        else{
            aplazadosF = aplazadosF + 1
        }

        if (Number(alumno.programacion) >= 9.5){
            aprobadosP = aprobadosP + 1
        }
        else{
            aplazadosP = aplazadosP + 1
        }

        if (alumno.matematica > maximaM){
            maximaM = alumno.matematica;
        }
        if (alumno.fisica > maximaF){
            maximaF = alumno.fisica;
        }
        if (alumno.programacion > maximaP){
            maximaP = alumno.programacion;
        }

        if (alumno.matematica >= 9.5 && alumno.fisica >= 9.5 && alumno.programacion >= 9.5){
            todas = todas + 1;
        }
        else if(alumno.matematica >= 9 && alumno.fisica >= 9.5 && alumno.programacion < 9.5 || alumno.matematica >= 9.5 && alumno.fisica < 9.5 && alumno.programacion >= 9.5 || alumno.matematica < 9.5 && alumno.fisica >= 9.5 && alumno.programacion >= 9.5 ){

            dos = dos + 1;
        }
        else if(alumno.matematica < 9.5 && alumno.fisica < 9.5 && alumno.programacion < 9.5){
            ninguna = ninguna + 1;
        }
        else{
            una = una + 1;
        }


    });

    promedioM = Number(acumuladoM/alumnos.length);
    promedioF = Number(acumuladoF/alumnos.length);
    promedioP = Number(acumuladoP/alumnos.length);

    logM.textContent = Number(promedioM).toFixed(2);
    logF.textContent = Number(promedioF).toFixed(2);
    logP.textContent = Number(promedioP).toFixed(2);

    aproM.textContent = Number(aprobadosM);
    aproF.textContent = Number(aprobadosF);
    aproP.textContent = Number(aprobadosP);

    aplaM.textContent = Number(aplazadosM);
    aplaF.textContent = Number(aplazadosF);
    aplaP.textContent = Number(aplazadosP);
    
    maxM.textContent = Number(maximaM);
    maxF.textContent = Number(maximaF);
    maxP.textContent = Number(maximaP);

    tod.textContent = Number(todas);
    par.textContent = Number(dos);
    un.textContent = Number(una);
    nin.textContent = Number(ninguna);
}