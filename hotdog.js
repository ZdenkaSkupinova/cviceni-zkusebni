export const toppings = [
  { name: 'Hořčice', price: 5, selected: false },
  { name: 'Kečup', price: 5, selected: false },
  { name: 'Cibule', price: 5, selected: false },
  { name: 'Okurka', price: 5, selected: false },
  { name: 'Paprika', price: 5, selected: false },
  { name: 'Rajče', price: 5, selected: false },
  { name: 'Chilli', price: 5, selected: false },
  { name: 'Sýr', price: 10, selected: false },
  { name: 'Slanina', price: 10, selected: false },
];
  
  export function renderToppings() {
    const container = document.getElementById('toppings-container');
    container.innerHTML = '';
    toppings.forEach((topping, index) => {
      const toppingElement = document.createElement('div');
      toppingElement.classList.add('topping');
      if (topping.selected) {
        toppingElement.classList.add('topping--selected');
      }
      toppingElement.innerHTML = `
        <h3>${topping.name}</h3>
        <p>Cena: ${topping.price} Kč</p>
      `;
      toppingElement.addEventListener('click', () => {
        toggleTopping(index);
      });
      container.appendChild(toppingElement);
    });
  }
  
  export function toggleTopping(index) {
    toppings[index].selected = !toppings[index].selected;
    renderToppings();
  }
  
