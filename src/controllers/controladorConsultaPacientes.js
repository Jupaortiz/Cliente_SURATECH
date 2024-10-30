import { pacientesSimulados } from "../data/simulacionPaciente.js"

let fila=document.getElementById("fila")
//Debo recorrer los datos de la base de datos para pintarlos

pacientesSimulados.forEach(function(paciente){
    console.log(paciente)
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
    etiquetaNombre.textContent=paciente.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d.block")
    etiquetaIcono.src="../../assets/img/paciente.png"

    let etiquetaIps=document.createElement("h4")
    etiquetaIps.classList.add("text-start","textosura")
    etiquetaIps.textContent="IPS: "+paciente.ips

    let etiquetaCorreo=document.createElement("h4")
    etiquetaCorreo.classList.add("text-start")
    etiquetaCorreo.textContent="Correo electronico: "+paciente.correo

    let etiquetaTelefono=document.createElement("h4")
    etiquetaTelefono.classList.add("text-start")
    etiquetaTelefono.textContent="Telefono celular: "+paciente.telefono

    let etiquetaCiudad=document.createElement("h4")
    etiquetaCiudad.classList.add("text-start")
    etiquetaCiudad.textContent="Ciudad: "+paciente.ciudad

    let etiquetaGrupoIngreso=document.createElement("h4")
    etiquetaGrupoIngreso.classList.add("text-start","textosura")
    etiquetaGrupoIngreso.textContent="Grupo ingreso: "+paciente.grupoIngreso

    let etiquetaAfiliacion=document.createElement("h4")
    etiquetaAfiliacion.classList.add("text-start")
    etiquetaAfiliacion.textContent="Fecha afiliacion: "+paciente.fechaAfiliacion

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
    tarjeta.appendChild(etiquetaIps)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaCiudad)
    tarjeta.appendChild(etiquetaGrupoIngreso)
    tarjeta.appendChild(etiquetaAfiliacion)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})