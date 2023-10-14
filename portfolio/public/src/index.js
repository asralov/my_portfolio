
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

// to show the string that is the personal info about me
// some html code that should be replaced with
const info = `Welcome to My Tech Journey<br>
<br>
Hello, I'm Abrorjon Asralov, a student web developer with a strong passion for technology. I'm currently pursuing a Computer Science degree at the University of Arizona.<br>
<br>
I'm dedicated to creating responsive and user-friendly websites using HTML, CSS, and JavaScript. My technical skills extend to Java, Python, C#, and various frameworks.<br>
<br>
I'm also a team player, a quick problem solver, and a great communicator. With a background in volunteer work, I'm committed to inspiring the next generation of students to reach for their dreams.<br>
<br>
Explore my work, connect on <a class="textLinks">LinkedIn</a>, or check out my projects on <a class="textLinks" href="www.google.com">GitHub</a>. Let's connect and create something amazing together.`;
const leftInfoBox = document.getElementById("personalInfo");
leftInfoBox.innerHTML = info;



// start working on a gallery part
// text part
const galleryText = `Personal Gallery<br><br>Tucson's allure extends beyond its landscapes and cityscape; 
it's a place where history and culture thrive. The city celebrates its rich heritage
through Native American art, Spanish colonial architecture, and lively festivals that 
showcase the traditions of the Southwest.<br><br> As a photographer, I'm drawn not only to Tucson's
natural beauty but also to the stories it tells through its streets, festivals, and diverse 
communities.<br><br> Every photograph taken in Tucson is a visual narrative of a city that beautifully
embraces its past while looking forward to a bright and dynamic future.<br><br>`;
const galleryTextContent = document.getElementById("galleryTitle");
galleryTextContent.innerHTML = galleryText;


// pictures part
pictureCollection = new Array(); // to store pictures in
// eleven since there are 11 pictures that should be stored
for (let c = 1; c <=11; c++){
  pictureCollection.push("tucson"+c+".jpg");
}

/*
let imgs = "";
const galleryPics = document.getElementById("gallery");
for (pic of pictureCollection){
  imgs += `<img class="galleryPics" src="./src/images/tucson/${pic}">` + '\n';
}
galleryPics.innerHTML = imgs;*/
