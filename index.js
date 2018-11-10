// CREATING A DOM ELEMENT
var element = document.createElement('div');

// SETTING PROPERTIES ON THAT ELEMENT
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

// SHOW THAT ELEMENT IN DOM
document.body.appendChild(element);

// CENTER THE ELEMENT
element.style.textAlign = 'center';

// APPEND MORE ELEMENTS
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

// ALIGN THE UL TO THE LEFT
ul.style.textAlign = 'left';

// REMOVE THE 2ND ELEMENT OF LI
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// REMOVE THE WHOLE ELEMENT
ul.remove();