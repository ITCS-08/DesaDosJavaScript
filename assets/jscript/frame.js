function modifyBorder(element) {
    const checkBorder = element.classList.contains('borderFrame')
    
    if (checkBorder) {
      
      alert("Se quitará marco Rojo. Favor haz click en la imagen para que vuelva a aparecer.");
      element.classList.remove('borderFrame')
    } else {
      element.classList.add('borderFrame')
    }
    
  }
  function modifyElement(event) {
    const clickedElement = event.target
    
    console.log(clickedElement.id)
    modifyBorder(clickedElement)
    
  }
  
  document.addEventListener('click', modifyElement)