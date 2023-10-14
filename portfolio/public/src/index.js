// to make the sidebar closed by default
let isOpen = false;
const btn = document.getElementById("menuButton");
function showSideBar() {
  const menuBar = document.getElementById("navbarLinks");
  // if it is closed, and is about to be open
  if (!isOpen) {
    btn.style.transform = "translateX(0)";
    menuBar.style.transform = "translateX(0)";
    isOpen = true;
  } else {
    btn.style.transform = "translateX(-280px)";
    menuBar.style.transform = "translateX(-280px)";
    isOpen = false;
  }
}
const menuBar = document.getElementById("navbarLinks");

btn.addEventListener('click', ()=>{
  if (!isOpen) {
    menuBar.style.left = 0;
    btn.style.left = 20+"%";
    isOpen = true;
  } else {
   
    menuBar.style.left = -20 + "%";
    btn.style.left = 0;
    isOpen = false;
  }
  console.log(isOpen)
});