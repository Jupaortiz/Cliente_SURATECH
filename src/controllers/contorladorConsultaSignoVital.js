import { signoVitalsimulado } from "../data/simuladorSignoVital.js"

let fila=document.getElementById("fila")
//Debo recorrer los datos de la base de datos para pintarlos

signoVitalsimulado.forEach(function(signoVital){
    console.log(signoVital)
    //APLICANDO TRAVERSING

    //1.Creo una columna para cada paciente
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.Creo una tarjeta para cada paciente
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3.Creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold","textosura")
    etiquetaNombre.textContent="Signo: "+signoVital.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d.block")
    etiquetaIcono.src="../../assets/img/signoVital.pgn.png"

    let etiquetaValor=document.createElement("h4")
    etiquetaValor.classList.add("text-start")
    etiquetaValor.textContent="Valor: "+signoVital.valor

    let etiquetaFecha=document.createElement("h4")
    etiquetaFecha.classList.add("text-start")
    etiquetaFecha.textContent="Fecha signo: "+signoVital.fechaSigno

    let eliminar=document.createElement("button")
    eliminar.classList.add("btn","btn-danger","w-25")   
    let iconoBasura=document.createElement("i")
    iconoBasura.classList.add("bi","bi-trash3-fill")

    let editar=document.createElement("button")
    editar.classList.add("btn","btn-primary","w-25","my-2")   
    let iconoEditar=document.createElement("i")
    iconoEditar.classList.add("bi", "bi-pencil-square")
  
    //Paso final--> ASOCIO LAS ESTIQUETAS
    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaValor)
    tarjeta.appendChild(etiquetaFecha)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
   