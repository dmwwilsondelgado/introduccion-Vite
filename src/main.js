import './style.css'

console.clear();




const categorias = [
  {
    nombre: 'Rosas', descripcion: 'Flores rojas, perfectas para el amor'
  },
  {
    nombre: 'Tulipanes', descripcion: 'Elegancia y colores vibrantes'
  },
  {
    nombre: 'Orquídeas', descripcion: 'Delicadas y exóticas'
  },
  {
    nombre: 'Girasoles', descripcion: 'Brillantes como el sol'
  },
];


// modificamos el dom  y agrgamos un evento esta va tener una funcion anonima que espera una promesa 
// al momento de dar un clik 
document.addEventListener('DOMContentLoaded', () => {
  const enlazarCategorias = document.querySelectorAll('.menu-navegacion__link');// enlazamos  con el querySelectorall en este buscamos   con su respectiva clase
  const contenedor = document.getElementById('.contenedor-categorias'); // creamos una costante  esta se encargar de insertar todo en el contenedor 
  //lamamos la constante 
  enlazarCategorias.forEach(link => {
    if (link.textContent.includes('Categorias')) {
      link.addEventListener('clik', (e) => {
        e.preventDefault();
        contenedor.innerHTML = '';
      })
      categorias.forEach(cat => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-categoria');
        //aca insiertamos con el InerHtml
        tarjeta.innerHTML = `
        <h3>${cat.nombre}</h3>
        <p>${cat.descripcion}</p>
        `
        contenedor.appendChild(tarjeta);
      })
    }
  })
})


window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1);
})