function myFunction() {
    document.getElementById("Button 1").innerHTML = "Modified Heading!";
  }

  function secondButton(){
    let h2 = document.querySelectorAll('h2')[1]
    h2.style.color ="green"
    h2.style.fontFamily =" Courier"
    h2.style.fontSize ="20px"
    h2[1].style.backgroundColor ="Red"
  }

  function thirdbutton(){
    document.getElementById('append').addEventListener('click', function() {
      // Change the background color of the page
      document.body.style.backgroundColor = '#f0f8ff';
  
      // Create the new paragraph
      const newText = document.createElement('p');
      newText.innerHTML = '<em>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.</em>';
  
      // Insert the new text after the fourth paragraph
      const fourthParagraph = document.querySelectorAll('p')[3];
      fourthParagraph.insertAdjacentElement('afterend', newText);
  
      // Add a logo image
      const logo = document.createElement('img');
      logo.src = 'https://via.placeholder.com/150'; // Replace with your logo URL
      logo.alt = 'Logo';
      logo.style.display = 'block'; // Optional styling
      logo.style.marginTop = '10px'; // Optional styling
  
      // Append the logo after the new text
      newText.insertAdjacentElement('afterend', logo);
  });
  }





let pos=0

function changePosition(){
  let c = document.querySelector('#carimage')
  c.style.position='relative'
  c.style.top= '300px'
  c.style.left='200px'
}

function doMove(){
  let c = document.querySelector('#carimage')
  c.style.position='relative'
  pos +=10
  c.style.left =pos+'px'
}