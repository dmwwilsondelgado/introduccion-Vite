import './style.css'

import imgUrl from '../public/vite.svg'
document.getElementById('vite.svg').src = imgUrl;
const main = document.querySelector('main');
window.addEventListener('backgorun', (e) => {
  console.log(location.bash.slide(1));
});
const llamado = async (exit) => {
  console.log("llamado");
  const precicion = await fetch('ruta')
}
console.log(llamado);
