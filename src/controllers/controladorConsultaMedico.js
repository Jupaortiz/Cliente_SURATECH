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

    //3.Creo una etiqueta para el nombre de cada medico
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=medico.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d.block")
    etiquetaIcono.src="../../assets/img/medico.png"

    let etiquetaMatricula=document.createElement("h4")
    etiquetaMatricula.classList.add("text-start")
    etiquetaMatricula.textContent="Matricula: "+medico.matricula

    let etiquetaEspecialidad=document.createElement("h4")
    etiquetaEspecialidad.classList.add("text-start","textosura")
    etiquetaEspecialidad.textContent="Especialidad: "+medico.especialidad

    let etiquetaIps=document.createElement("h4")
    etiquetaIps.classList.add("text-start","textosura")
    etiquetaIps.textContent="IPS Asociada: "+medico.ipsAsociada

    let etiquetaCorreo=document.createElement("h4")
    etiquetaCorreo.classList.add("text-start")
    etiquetaCorreo.textContent="Correo electronico: "+medico.correo

    let etiquetaTelefono=document.createElement("h4")
    etiquetaTelefono.classList.add("text-start")
    etiquetaTelefono.textContent="Telefono celular: "+medico.telefono


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
    tarjeta.appendChild(etiquetaMatricula)
    tarjeta.appendChild(etiquetaEspecialidad)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaIps)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})