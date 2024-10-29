let cajaNombreMedicamento=document.getElementById("nombremedicamento")
let cajaPresentacion=document.getElementById("presentacionmedicamento")
let cajaDosis=document.getElementById("dosismedicamento")
let cajaLaboratorio=document.getElementById("laboratoriomedicamento")
let cajaContraindicaciones=document.getElementById("contraindicacionesmedicamento")
let cajaFechaCaducidad=document.getElementById("fechacaducidad")
let cajaInvima=document.getElementById("invima")
let cajaCopago=document.getElementById("copago")

let botonRegistroMedicamento=document.getElementById("botonRegistroMedicamento")
botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()

let datosFormularioMedicamento={
    nombre:cajaNombreMedicamento.value,
    presentacion:cajaPresentacion.value,
    dosis:cajaDosis.value,
    laboratorio:cajaLaboratorio.value,
    contraIndicaciones:cajaContraindicaciones.value,
    fechaCaducidad:cajaFechaCaducidad.value,
    registroInvima:cajaInvima.value,
    tieneCopago:cajaCopago.value
}
console.log(datosFormularioMedicamento)

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Tu medicamento ha sido registrado correctamente!",
        icon: "success"
      });
})