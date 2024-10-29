let cajaNombreMedico=document.getElementById("nombremedico")
let cajaMatriucla=document.getElementById("matriculamedico")
let cajaEspecialidad=document.getElementById("especialidadmedico")
let cajaSalario=document.getElementById("salariomedico")
let cajaTelefonoMedico=document.getElementById("telefonomedico")
let cajaCorreoMedico=document.getElementById("correoMedico")
let cajaDirecionMedico=document.getElementById("direccionmedico")
let cajaIpsAsociada=document.getElementById("ipsmedico")
let cajaFinSemana=document.getElementById("findesemana")

let botonRegistroMedico=document.getElementById("botonRegistroMedico")
botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()

let datosFormularioMedico={
    nombre:cajaNombreMedico.value,
    matricula:cajaMatriucla.value,
    especialidad:cajaEspecialidad.value,
    salario:cajaSalario.value,
    ipsAsociada:cajaIpsAsociada.value,
    correo:cajaCorreoMedico.vlaue,
    telefono:cajaTelefonoMedico.value,
    direccion:cajaDirecionMedico.value,
    estaDisponibleFinDeSemana:cajaFinSemana.value
}
console.log(datosFormularioMedico)

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Ya haces parte de nuestra familia!",
        icon: "success"
      });
})