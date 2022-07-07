import { ICards } from './cards_info'

 export function draw(data: ICards[]){
    const products = document.querySelector('.products') as HTMLElement;
    const fragment = document.createDocumentFragment();

    data.forEach((el) => {
      const shoesCard = document.createElement('div');
      shoesCard.classList.add('shoes-card');
      shoesCard.innerHTML = `
      <img src="${el.image}" alt="img">
      <p id="shoes__name">${el.name}</p>
      <p id="shoes__category">${el.category}</p>
      <p id="shoes__colors">${el.color.length} colors</p>
      <p id="shoes__price">$${el.price}</p>
      <div class="basket-status"></div>`;

      fragment.append(shoesCard);
    });
    products.appendChild(fragment);
}

