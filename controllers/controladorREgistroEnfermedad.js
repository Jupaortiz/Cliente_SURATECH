//Definir variables
let cajaNombreEnfermedad=document.getElementById("nombreenfermedad")
let cajaSintomas=document.getElementById("sintomas")
let cajaClasificacion=document.getElementById("clasificacionenfermedad")
let cajaGrado=document.getElementById("gradoenfermedad")
let cajaProbabilidadvivir=document.getElementById("probabilidadvivir")

let botonRegostroEnfermedad=document.getElementById("registroenfermedad")
//Detectar el evento de click en el boton
botonRegostroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()

    //Recojer los datos

    let datosFormularioEnfermedad={
        nombre:cajaNombreEnfermedad.value,
        sintomas:cajaSintomas.value,
        clasificacion:cajaClasificacion.value,
        grado:cajaGrado.value,
        probabilidadVida:cajaProbabilidadvivir.value
    }
    console.log(datosFormularioEnfermedad)

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Ya haces parte de nuestra familia!",
        icon: "success"
      });
})
 

