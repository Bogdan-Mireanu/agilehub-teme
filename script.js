function toggleMenu() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    const y = document.querySelector('.cart');
    if(y.style.display === "none"){
      y.style.display = "block";
    } else {
      y.style.display ="none";
    }
  }

function toggleSubmenu(){
  const submenu= document.querySelector(".men-submenu");
  if (submenu.style.display === "flex"){
    submenu.style.display = "none";
  } else {
    submenu.style.display = "flex";
  }
}

 