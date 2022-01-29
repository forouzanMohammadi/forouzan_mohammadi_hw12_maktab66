let modal = document.getElementById("myModal");
let btn = document.getElementById("formBtn");
let bt = document.getElementById("bt")
let formName = document.getElementsByTagName('input')



btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function manage(txt) {
  
  for (i = 0; i < formName.length; i++) {
    
    // Check the element type.
    if (formName[i].type == 'text' && formName[i].value == '') {
      bt.disabled = true;    // Disable the button.
      return false;
    }
    else {
      bt.disabled = false;   // Enable the button.
    }
  }
  bt.addEventListener('click',()=>{
    alert('Your information was successfully registered!')
    window.setInterval('refresh()', 8000); 	
    
      
  })
}
function refresh() {
  window .location.reload();
}


