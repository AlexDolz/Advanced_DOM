// ************ selecting, creating, deletings elements *********************
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // node list, dont updating automatically if deleting element

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // html collection updating automatically if deleting element

console.log(document.getElementsByClassName('btn'));

// Creating and inserting element
// .inserAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // only first  element
// header.append(message); // only last element
// header.append(message.cloneNode(true)); // in both places, we copy message

// header.before(message); // before header
// header.after(message); // after header

// Delete elements
// document
//   .querySelector('btn--close-cookie')
//   .addEventListener('click', () => message.remove()); // after click on btn remove element

// document
//   .querySelector('btn--close-cookie')
//   .addEventListener('click', () => message.parentElement.removeChild(message)); // after click on btn remove element. old way

// ******************* styles, attributes and classes **************

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message)); // all styles to see
// console.log(getComputedStyle(message).height); // all styles to see

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered'); // to make changes in :root in css file from JS

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('designer'));
logo.setAttribute('company');

logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('class');
logo.classList.remove('class');
logo.classList.toggle('class');
logo.classList.contains('class');

// Dont use
logo.className = 'jonas'; // override all classes
