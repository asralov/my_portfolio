
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
const info = `Welcome to My Tech Journey<br>
<br>
Hello, I'm Abrorjon Asralov, a student web developer with a strong passion for technology. I'm currently pursuing a Computer Science degree at the University of Arizona.<br>
<br>
I'm dedicated to creating responsive and user-friendly websites using HTML, CSS, and JavaScript. My technical skills extend to Java, Python, C#, and various frameworks.<br>
<br>
I'm also a team player, a quick problem solver, and a great communicator. With a background in volunteer work, I'm committed to inspiring the next generation of students to reach for their dreams.<br>
<br>
Explore my work, connect on LinkedIn, or check out my projects on GitHub. Let's connect and create something amazing together.`;
const leftInfoBox = document.getElementById("personalInfoText");
leftInfoBox.innerHTML   = info;