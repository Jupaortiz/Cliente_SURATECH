import { medicamentoSimulado } from "../data/simuladorMedicamento.js";

let fila=document.getElementById("fila")
//Debo recorrer los datos de la base de datos para pintarlos

medicamentoSimulado.forEach(function(medicamento){
    console.log(medicamento)

      //APLICANDO TRAVERSING

    //1.Creo una columna para cada medicamento
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.Creo una tarjeta para cada medicamento
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3.Creo una etiqueta para el nombre de cada medicamento

    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=medicamento.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d.block")
    etiquetaIcono.src="../../assets/img/medicamento.pgn.png"

    let etiquetaPresentacion=document.createElement("h4")
    etiquetaPresentacion.classList.add("text-start","textosura")
    etiquetaPresentacion.textContent="Presentacion: "+medicamento.presentacion

    let etiquetaDosis=document.createElement("h4")
    etiquetaDosis.classList.add("text-start")
    etiquetaDosis.textContent="Dosis: "+medicamento.dosis

    let etiquetaContraindicaciones=document.createElement("h4")
    etiquetaContraindicaciones.classList.add("text-start")
    etiquetaContraindicaciones.textContent="Contraindicaciones: "+medicamento.contraIndicaciones

    let etiquetaFechaCaducidad=document.createElement("h4")
    etiquetaFechaCaducidad.classList.add("text-start")
    etiquetaFechaCaducidad.textContent="Fecha Caducidad: "+medicamento.fechaCaducidad

    let etiquetaRegistroInvima=document.createElement("h4")
    etiquetaRegistroInvima.classList.add("text-start","textosura")
    etiquetaRegistroInvima.textContent="Registro INVIMA: "+medicamento.registroInvima

    let eliminar=document.createElement("button")
    eliminar.classList.add("btn","btn-danger","w-25")   
    let iconoBasura=document.createElement("i")
    iconoBasura.classList.add("bi","bi-trash3-fill")


    let editar=document.createElement("button")
    editar.classList.add("btn","btn-primary","w-25","my-2")   
    let iconoEditar=document.createElement("i")
    iconoEditar.classList.add("bi", "bi-pencil-square")


    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaPresentacion)
    tarjeta.appendChild(etiquetaDosis)
    tarjeta.appendChild(etiquetaContraindicaciones)
    tarjeta.appendChild(etiquetaFechaCaducidad)
    tarjeta.appendChild(etiquetaRegistroInvima)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})
    