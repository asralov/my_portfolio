

const closeBtn = document.getElementById("closeMenuButton");
const openBtn = document.getElementById("menuButton");
function openBar(isOpen) {
  const navbar = document.getElementById("navbarLinks");
  if (isOpen) {
    showMenu(navbar);
  } else {
    closeMenu(navbar);
  }
}
console.log(closeBtn.innerHTML)

function showMenu(navbar) {
  navbar.style = `height: 100vh;
                    width: 20%;
                    background-color: rgba(10, 10, 10, 0.4);
                    color: #fff;
                    -webkit-transition: all 0.2s ease-out;
                    `;
  openBtn.style = "opacity: 1";
  closeBtn.style = `position: fixed;
                    left: 17%;
                    top: 5px;
                    font-size: 20px;
                    padding: 5px 5px;
                    border: none;
                    color: red;
                    background-color: #fff;`;
}

function closeMenu(navbar) {
  navbar.style.display = "none";
  openBtn.style = `position: fixed;
                    left: 5px;
                    top: 5px;
                    padding: 10px 10px;`;
  closeBtn.style = "opacity: 1;";
}


