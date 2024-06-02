import { toppings, renderToppings } from './hotdog.js';

// na celý index.html zavesí poslucháč, ktorý po načítaní celého dokumentu zavolá funkciu renderToppings()
// tento dokument je maličký, aj keby to nebolo viazané na tren posluchač, fungovalo by to. Ale je to pekné ošetrenie, je vhodné o tom vedieť. 
document.addEventListener('DOMContentLoaded', () => {
  renderToppings();
});
