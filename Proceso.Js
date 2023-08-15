
function capturaa(){
var metross=document.getElementById("metros").value
var pesototal=document.getElementById("peso2").value

if(metross==""){
        alert("Porfavor Digitar el numero en metros")
    document.getElementById("metros").focus()
}else{
    if(pesototal==""){
        alert("Porfavor Digitar el peso en kilogramos")
    document.getElementById("peso2").focus()
    }else{
        document.getElementById("metros").value=""
        document.getElementById("peso2").value=""
        document.getElementById("metros").focus()
    }
}
//Operacion de el indice de masa muscular
var  total
total = pesototal/(metross * metross)
//mostrar en pantalla el indice y su ranking
if(total<=18.5){
    alert("Su IMC es " + total.toFixed(1) + " lo que indica que su peso esta en la categoría de Bajo peso para adultos de su estatura.")
}else{
    if(total>=18.5 && total<=24.9){
        alert("Su IMC " + total.toFixed(1) + " lo que indica que su peso esta en la categoría de Peso saludable para adultos de su estatura.")
    }else{
        if(total>=25.0 && total<=29.9){
            alert("Su IMC es  "+ total.toFixed(1) + " lo que indica que su peso esta en la categoría de Sobrepeso para adultos de su estatura.")
        }else{
            if(total>= 30.0){
                alert("Su IMC es  " + total.toFixed(1) + " lo que indica que su peso esta en la categoría de Obeso para adultos de su estatura.")
            }
        }
    }
}

console.log("Estatura: " + metross + " Peso: " + pesototal + " " + " Su masa muscular es: " + total.toFixed(1))

}
