//1. Asignamos un id a cada input, select o textarea del formulario
//2. Asignar un id a cada boton de registro de formulario
//3. a cada id asignada le creo una vaiable en js
//4. Asociar a cada varuable el id que se configuro en html

let cajaNombre=document.getElementById("nombrepaciente")
let cajaFechaNacimiento=document.getElementById("nacimientoPaciente")
let cajaCiudad=document.getElementById("ciudadpaciente")
let cajaCorreo=document.getElementById("correopaciente")
let cajaIPS=document.getElementById("ipspaciente")
let cajaTelefono=document.getElementById("telefonopaciente")
let cajaFechaAfiliacion=document.getElementById("afiliacionpaciente")
let cajaGrupoIngreso=document.getElementById("grupoingreso")
let cajaAsegurado=document.getElementById("tienepoliza")

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//5.Detectar el evento de clic en el boton
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()
    //6. Recojer los datos

    let datosFormularioPaciente={
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono,
        ips:cajaIPS.value,
        tienePoliza:cajaAsegurado.value,
        gurpoIngreso:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value
    }
    console.log(datosFormularioPaciente)

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Ya haces parte de nuestra familia!",
        icon: "success"
      });
})