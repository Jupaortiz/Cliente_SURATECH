let cajaNombreSigno=document.getElementById("nombreSigno")
let cajaValor=document.getElementById("valorSigno")
let cajaFechaSigno=document.getElementById("fechaSigno")

let botonregistroSigno=document.getElementById("botonregistrosigno")

//5.Detectar el evento de clic en el boton
botonregistroSigno.addEventListener("click",function(evento){

    evento.preventDefault()
    //6. Recojer los datos

    let datosFormularioSignoVital={
        nombre:cajaNombreSigno.value,
        valor:cajaValor.value,
        fechaMedida:cajaFechaSigno.value
    }
    console.log(datosFormularioSignoVital);

    Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Tu Signo vital fue registrado!",
        icon: "success"
      });

})

