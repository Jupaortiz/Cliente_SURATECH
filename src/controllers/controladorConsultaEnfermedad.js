import { enfermedadSimulada } from "../data/simulacionEnfermedad.js"

let fila=document.getElementById("fila")
//Debo recorrer los datos de la base de datos para pintarlos

enfermedadSimulada.forEach(function(enfermedad){
    console.log(enfermedad)
    //APLICANDO TRAVERSING

    //1.Creo una columna para cada paciente
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.Creo una tarjeta para cada paciente
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3.Creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=enfermedad.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d.block")
    etiquetaIcono.src="../../assets/img/enfermedad.pgn.png"

    let etiquetaSintomas=document.createElement("h4")
    etiquetaSintomas.classList.add("text-start","textosura")
    etiquetaSintomas.textContent="Sintomas: "+enfermedad.sintomas

    let etiquetaClasificacion=document.createElement("h4")
    etiquetaClasificacion.classList.add("text-start")
    etiquetaClasificacion.textContent="Clasificacion: "+enfermedad.clasificacion

    let etiquetaGrado=document.createElement("h4")
    etiquetaGrado.classList.add("text-start")
    etiquetaGrado.textContent="Grado: "+enfermedad.grado

    let etiquetaProbabilidad=document.createElement("h4")
    etiquetaProbabilidad.classList.add("text-start","textosura")
    etiquetaProbabilidad.textContent="Probabiliad de vida: "+enfermedad.probabilidadVida

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
    tarjeta.appendChild(etiquetaSintomas)
    tarjeta.appendChild(etiquetaClasificacion)
    tarjeta.appendChild(etiquetaGrado)
    tarjeta.appendChild(etiquetaProbabilidad)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})