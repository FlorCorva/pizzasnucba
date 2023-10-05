const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Resto del código para la búsqueda y renderizado de pizzas aquí
// Función para buscar una pizza por ID
function buscarPizzaPorId(id) {
  return pizzas.find(pizza => pizza.id === id);
}

// Función para renderizar una pizza en el contenedor
function renderizarPizza(pizza) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
      <div class="pizza-card">
          <img src="${pizza.imagen}" alt="${pizza.nombre}" />
          <h2>${pizza.nombre}</h2>
          <p>Precio: $${pizza.precio.toFixed(2)}</p>
      </div>
  `;
}

// Función para manejar la búsqueda de pizzas
function buscarPizza() {
  const inputElement = document.getElementById('pizza-id');
  const pizzaId = parseInt(inputElement.value);

  if (isNaN(pizzaId)) {
      // Mostrar mensaje de error si no se ingresa un número
      const resultContainer = document.getElementById('result-container');
      resultContainer.innerHTML = '<p class="error-message">Por favor, ingresa un número válido.</p>';
  } else {
      const pizzaEncontrada = buscarPizzaPorId(pizzaId);
      if (pizzaEncontrada) {
          // Si se encuentra la pizza, renderízala
          renderizarPizza(pizzaEncontrada);

          // Guardar la pizza en el localStorage
          localStorage.setItem('ultimaPizzaBuscada', JSON.stringify(pizzaEncontrada));
      } else {
          // Mostrar mensaje de error si no se encuentra la pizza
          const resultContainer = document.getElementById('result-container');
          resultContainer.innerHTML = '<p class="error-message">No se encontró una pizza con ese ID.</p>';
      }
  }
}

// Manejar el evento de envío del formulario
const form = document.getElementById('pizza-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  buscarPizza();
});

// Comprobar si hay una pizza en el localStorage al cargar la página
const pizzaEnLocalStorage = localStorage.getItem('ultimaPizzaBuscada');
if (pizzaEnLocalStorage) {
  const ultimaPizzaBuscada = JSON.parse(pizzaEnLocalStorage);
  renderizarPizza(ultimaPizzaBuscada);
}
