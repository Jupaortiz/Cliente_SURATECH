import { simuladorMedico } from "../data/simuladorMedico.js";


//Recorrer y pintar los datos
simuladorMedico.forEach(function(medico){
    console.log(medico)

    //Aplicando Transversing

    //columna para cada medico
    let columna=document.createElement("div")
    columna.classList.add("col")

    //tarjeta para cada medico
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=medico.nombre
})