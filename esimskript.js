const form = document.getElementById('contactForm');

form.onsubmit = function(event) {
  event.preventDefault();  


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = document.getElementById('comment').value.trim();

  
  let valid = true;


  if (name === "") {
    valid = false;
    document.getElementById('nameError').textContent = "Nimi ei saa olla tyhjä";
    document.getElementById('name').style.border = "2px solid red";
  } else {
    document.getElementById('nameError').textContent = "";
    document.getElementById('name').style.border = "";
  }

  
  if (email.length < 6 || email.length > 15 || !email.includes("@")) {
    valid = false;
    document.getElementById('emailError').textContent = "Sähköposti ei ole validi";
    document.getElementById('email').style.border = "2px solid red";
  } else {
    document.getElementById('emailError').textContent = "";
    document.getElementById('email').style.border = "";
  }

 
  if (comment === "" || comment.length > 150) {
    valid = false;
    document.getElementById('commentError').textContent = "Kommentti on virheellinen";
    document.getElementById('comment').style.border = "2px solid red";
  } else {
    document.getElementById('commentError').textContent = "";
    document.getElementById('comment').style.border = "";
  }


  if (valid) {
    alert(`Nimi: ${name}\nSähköposti: ${email}\nKommentti: ${comment}`);
  }
};


