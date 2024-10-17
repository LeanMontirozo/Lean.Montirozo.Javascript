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

  document.getElementById('appendTextBtn').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.</i>';
    
    const fourthParagraph = document.getElementsByTagName('p')[3];
    fourthParagraph.parentNode.insertBefore(newParagraph, fourthParagraph.nextSibling);
    
    const logoImg = document.createElement('img');
    logoImg.src = 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg'; 
    logoImg.alt = 'Logo';
    logoImg.style.display = 'block'; 
    
    fourthParagraph.parentNode.insertBefore(logoImg, newParagraph.nextSibling)
});

function hide() {
  const checkbox = document.getElementById('CheckboxGroup1_0');
  const element = document.getElementById('me');
  element.style.display = checkbox.checked ? 'none' : 'block';
}

function show() {
  const showCheckbox = document.getElementById('CheckboxGroup1_1');
  const hideCheckbox = document.getElementById('CheckboxGroup1_0');
  const element = document.getElementById('me');
  
  if (showCheckbox.checked) {
      element.style.display = 'block'; 
      hideCheckbox.checked = false;
  }
}

function changeFontSize() {
  const checkbox = document.getElementById('CheckboxGroup1_2');
  const surpriseText = document.getElementById('surprise');
  
  surpriseText.style.fontSize = checkbox.checked ? '20px' : '16px';
}

function showChoice() {
  const selectElement = document.getElementById('mySelect');
  const selectedValue = selectElement.value;
  alert('You selected: ' + selectedValue);
}

function changeImage() {
  const select = document.getElementById('carSelect');
  const image = document.getElementById('carimage');
  image.src = select.value;
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

function fadeOut() {
  const image = document.getElementById('carimage');
  let opacity = 1;

  const interval = setInterval(() => {
      if (opacity <= 0) {
          clearInterval(interval); 
          image.remove(); 
      } else {
          opacity -= 0.05;
          image.style.opacity = opacity; 
      }
  }, 50);
}

function addRow() {
  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const salary = document.getElementById('salary').value;

  const table = document.getElementById('data').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const positionCell = newRow.insertCell(1);
  const salaryCell = newRow.insertCell(2);

  nameCell.textContent = name;
  positionCell.textContent = position;
  salaryCell.textContent = salary;

  document.getElementById('name').value = '';
  document.getElementById('position').value = '';
  document.getElementById('salary').value = '';
}