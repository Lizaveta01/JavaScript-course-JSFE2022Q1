import { ICards } from '../models/inrefaces'
import { selectors } from '../models/selectors'
class RenderCards {
   products: HTMLElement;
  // shoesItemTemp: HTMLTemplateElement;
  // fragment:DocumentFragment;
  // cardClone: HTMLElement;
  // img: HTMLImageElement;
  // cardName: HTMLElement;
  // cardCategory: HTMLElement;
  // cardBrand: HTMLElement ;
  // cardMaterial: HTMLElement;
  // cardPrice: HTMLElement;
  // cardColor: HTMLElement;
  // cardStock: HTMLElement;
  // cardBasketButton: HTMLElement;

  constructor(){
    // this.shoesItemTemp = document.querySelector(selectors.shoesTemplate) as HTMLTemplateElement;
    // this.fragment = document.createDocumentFragment();
    // this.cardClone = this.shoesItemTemp?.content.cloneNode(true) as HTMLElement;
    // this.img = this.cardClone?.querySelector(selectors.shoesCardImage) as HTMLImageElement;
    // this.cardName = this.cardClone.querySelector(selectors.shoesCardName) as HTMLElement;
    // this.cardCategory =this.cardClone.querySelector(selectors.shoesCardCategory) as HTMLElement;
    // this.cardBrand =this.cardClone.querySelector(selectors.shoesCardBrand) as HTMLElement;
    // this.cardMaterial = this.cardClone.querySelector(selectors.shoesCardMaterial) as HTMLElement;
    // this.cardPrice = this.cardClone.querySelector(selectors.shoesCardPrice) as HTMLElement;
    // this.cardColor = this.cardClone.querySelector(selectors.shoesCardColor) as HTMLElement;
    // this.cardStock = this.cardClone.querySelector(selectors.shoesCardStock) as HTMLElement;
    // this.cardBasketButton = this.cardClone.querySelector(selectors.shoesCardBasketButton) as HTMLElement;
    this.products = document.querySelector(selectors.catalogProducts) as HTMLElement;
}      

  draw(data: ICards[], basket:Record<string,number>){
    const shoesItemTemp = document.querySelector(selectors.shoesTemplate) as HTMLTemplateElement;
    const fragment = document.createDocumentFragment();

    if (!data.length) {
      const text = document.createElement('p');
      text.textContent = "Sorry, we couldn't find the page you're looking for";
      text.classList.add('notify');
      fragment.append(text);
    } else {
      data.forEach((item) => {
        const cardClone = shoesItemTemp?.content.cloneNode(true) as HTMLElement;
        const img = cardClone?.querySelector(selectors.shoesCardImage) as HTMLImageElement;
        const cardName = cardClone.querySelector(selectors.shoesCardName) as HTMLElement;
        const cardCategory = cardClone.querySelector(selectors.shoesCardCategory) as HTMLElement;
        const cardBrand = cardClone.querySelector(selectors.shoesCardBrand) as HTMLElement;
        const cardMaterial = cardClone.querySelector(selectors.shoesCardMaterial) as HTMLElement;
        const cardPrice = cardClone.querySelector(selectors.shoesCardPrice) as HTMLElement;
        const cardColor = cardClone.querySelector(selectors.shoesCardColor) as HTMLElement;
        const cardStock = cardClone.querySelector(selectors.shoesCardStock) as HTMLElement;
        const cardBasketButton = cardClone.querySelector(selectors.shoesCardBasketButton) as HTMLElement;

        img.src = item.img;
        cardName.innerText = item.name;
        cardCategory.textContent = item.category;
        cardBrand.textContent = item.brand;
        cardMaterial.textContent = item.material;
        cardColor.textContent = `${item.color.length} color`;
        cardPrice.textContent = `$${item.price}`;
        cardStock.textContent = item.stock ? 'In stock' : 'On request';
        item.stock
            ? cardStock.classList.add('shoes-in-stock')
            : cardStock.classList.add('shoes-out-of-stock');
        cardBasketButton.textContent = basket[item.name] ? 'In the basket' : 'Add to basket';
        basket[item.name]
            ? cardBasketButton.classList.add('added')
            : cardBasketButton.classList.remove('added');
        fragment.append(cardClone);   
      });
     }
     this.products.innerHTML = '';
     this.products.appendChild(fragment);
  }
}

export default RenderCards;