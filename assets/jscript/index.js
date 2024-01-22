
function checkStickers(){
  const failResponse = "Llevas demasiados Stickers. Sólo se permiten llevar 10. Tú estas llevando : "
  const firstStickerCounter = document.getElementById('stickerA')
  const secondStickerCounter = document.getElementById('stickerB')
  const thirdStickerCounter = document.getElementById('stickerC')
  const myParagraph = document.getElementById('paragraphResponse')
  
  const sum = parseInt(firstStickerCounter.value) +
              parseInt(secondStickerCounter.value) +
              parseInt(thirdStickerCounter.value)
  
  if (( parseInt(firstStickerCounter.value) || parseInt(secondStickerCounter.value) || parseInt(thirdStickerCounter.value)) < 0){

    const ResponseNegative = "No puedes ingresar valores en Negativo!!!"
     myParagraph.innerText = ResponseNegative
     
  }else{
  
   if (sum > 10){
    myParagraph.innerText = failResponse + sum + " stickers"
  } else {
    const okResponse = "Llevas " + sum + " stickers"
    myParagraph.innerText = okResponse
  }
}
}


function checkPass(){
    const firstDigit = document.getElementById('digitA').value
    const secondDigit = document.getElementById('digitB').value
    const thirdDigit = document.getElementById('digitC').value
    const firstValidPassword = "911"
    const secondValidPassword = "714"
    const p = document.getElementById('passwordResponse')
    const sum = (firstDigit+secondDigit+thirdDigit)

    
    if (sum == firstValidPassword) {
      p.innerText = 'password 1 es correcto ' + firstValidPassword
    } else if (sum == secondValidPassword){
      p.innerText = 'password 2 es correcto ' + secondValidPassword
    } else {
      p.innerText = 'password incorrecto'
    }

  }
  function limpiarDatos() {

    location.reload(true);
     
  }

  function revisaEdad(){

    const edadIngresada = document.getElementById('p').value

    if(edadIngresada < 30){

        alert("Eres Joven Aún");
        console.log("Esta es tu edad" + edad);
    } else {

     alert("A preocuparse de la salud");
     console.log(edad);
    }

  }

  
  
  

