// to make the sidebar closed by default
let isOpen = false;
const btn = document.getElementById("menuButton");
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

// pictures part
pictureCollection = new Array(); // to store pictures in
// eleven since there are 11 pictures that should be stored
for (let c = 1; c <=11; c++){
  pictureCollection.push("tucson"+c+".jpg");
}


let imgs = "";
const galleryPics = document.getElementById("gallery");
for (pic of pictureCollection){
  imgs += `<img class="galleryPics" src="../images/tucson/${pic}">` + '\n';
}
galleryPics.innerHTML = imgs;
