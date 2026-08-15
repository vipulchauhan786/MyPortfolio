// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("is-open");
});

// menu par click karne ke baad menu band ho jaye
const allLinks = navLinks.querySelectorAll("a");
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", function () {
    navLinks.classList.remove("is-open");
  });
}

// ===== TERMINAL TYPING EFFECT =====
const commandText = "whoami";
const outputLines = [
  "name   : Vipul Chauhan",
  "role   : MCA Student, GTU",
  "status : Open to opportunities"
];

const typedLine = document.getElementById("typedLine");
const terminalOutput = document.getElementById("terminalOutput");

let charIndex = 0;

function typeCommand() {
  if (charIndex < commandText.length) {
    typedLine.textContent += commandText.charAt(charIndex);
    charIndex++;
    setTimeout(typeCommand, 100);
  } else {
    // typing khatam hone ke baad output print karo
    setTimeout(printOutput, 300);
  }
}

let lineIndex = 0;

function printOutput() {
  if (lineIndex < outputLines.length) {
    const newLine = document.createElement("p");
    newLine.textContent = outputLines[lineIndex];
    terminalOutput.appendChild(newLine);
    lineIndex++;
    setTimeout(printOutput, 400);
  }
}

// page load hote hi typing start karo
window.onload = function () {
  typeCommand();
};

// ===== FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();