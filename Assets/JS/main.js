function showNavMenu() {
  if (document.getElementById("navMenu").style.display === "none") {
    document.getElementById("navMenu").style.display = "block";
  } else {
    document.getElementById("navMenu").style.display = "none";
  }
}

window.onload = function() {
  document.getElementById("about-container").style.display = "block";
};

function showAbout() {
  if (document.getElementById("about-container").style.display === "none") {
    document.getElementById("about-container").style.display = "block";
    document.getElementById("contact-container").style.display = "none";
    document.getElementById("portfolio-container").style.display = "none";
  } else {
    document.getElementById("about-container").style.display = "none";
  }
}

function showContact() {
  if (document.getElementById("contact-container").style.display === "none") {
    document.getElementById("contact-container").style.display = "block";
    document.getElementById("about-container").style.display = "none";
    document.getElementById("portfolio-container").style.display = "none";
  } else {
    document.getElementById("contact-container").style.display = "none";
  }
}

function showPortfolio() {
  if (document.getElementById("portfolio-container").style.display === "none") {
    document.getElementById("portfolio-container").style.display = "block";
    document.getElementById("about-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
  } else {
    document.getElementById("portfolio-container").style.display = "none";
  }
}
