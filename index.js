// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Flex Panel Gallery - click a word, please.</h1>`;

//JS to add and remove class of open to start CSS animation
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));