// pole s toppingami
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
    // nastaví html div, ktorého obsah bude manipulovať
    const container = document.getElementById('toppings-container');
    // ak už v ňom niečo je (z predchádzajúceho renderu), zmaže
    container.innerHTML = '';
    // prejde pole toppings, a pre každý jeden topping:
    toppings.forEach((topping, index) => {
      // vytvorí div
      const toppingElement = document.createElement('div');
      // pridá divu triedu "topping"
      toppingElement.classList.add('topping');
      // ak má topping selected = true, pridá divu triedu "topping--selected"
      if (topping.selected) {
        toppingElement.classList.add('topping--selected');
      }
      // div, ktorý vytvoril a naštýloval, naplní názvom a cenou
      toppingElement.innerHTML = `
        <h3>${topping.name}</h3>
        <p>Cena: ${topping.price} Kč</p>
      `;
      // na div pripojí poslucháč, ktorý po kliknutí volá funkciu toggleTopping(index kliknutého toppingu)
      toppingElement.addEventListener('click', () => {
        toggleTopping(index);
      });
      // do rodičovského divu, ktorý bol vytvorený na úplnom začiatku, pridá naštýlovaný div s toppingom
      container.appendChild(toppingElement);
    });
  }

  // prepínač vlastnosti selected
  export function toggleTopping(index) {
    // v poli toppings vyhľadá topping na indexe index, pozrie sa na vlastnosť selected, a zmení ju na opačnú hodnotu
    toppings[index].selected = !toppings[index].selected;
    // zavolá renderToppings, aby sa zmena hodnoty vlastnosti selected u niektorého z toppingov prejavila - treba vyrendrovať znovu.
    renderToppings();
  }
  