const botonTema = document.querySelector('[data-tema]');

if (localStorage.getItem('tema') === 'noche') document.body.classList.add('modo-noche');

botonTema?.addEventListener('click', () => {
  const modoNoche = document.body.classList.toggle('modo-noche');
  localStorage.setItem('tema', modoNoche ? 'noche' : 'dia');
  botonTema.textContent = modoNoche ? 'Modo claro' : 'Modo noche';
});

const paginaActual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navegacion a').forEach((enlace) => {
  if (enlace.getAttribute('href') === paginaActual) enlace.classList.add('activo');
});

const formularioContacto = document.querySelector('#formularioContacto');

formularioContacto?.addEventListener('submit', (evento) => {
  evento.preventDefault();
  formularioContacto.classList.add('was-validated');

  if (!formularioContacto.checkValidity()) return;

  const mensajeExito = document.querySelector('#mensajeExito');
  mensajeExito?.classList.remove('d-none');
  if (window.jQuery) $('#mensajeExito').hide().fadeIn(400);
  formularioContacto.reset();
  formularioContacto.classList.remove('was-validated');
});

if (window.jQuery) {
  $(document).ready(() => $('.aparecer').hide().fadeIn(500));
}
