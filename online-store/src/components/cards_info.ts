export interface ICards {
  name: string,
  category: string,
  price: string,
  gender: string,
  color: string[],
  size: string[],
  brand: string,
  material: string,
  image: string
}

export const cards: ICards[] = [
  {
    name: 'Nike Waffle One SE',
    category: 'Basketball',
    price: '89.95',
    gender: 'Mens Shoes',
    color: ['white', 'black'],
    size: ['4.5', '5.0', '6.0'],
    brand: 'Nike By You',
    material: 'Canvas',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/29082110-583d-4021-9ff0-57d2cff36c9b/waffle-one-se-shoes-mT3CQN.png'
  },
  {
    name: 'Nike Air Force 1',
    category: 'Running',
    price: '115.96',
    gender: 'Mens Shoes',
    color: ['red', 'white', 'black'],
    size: ['7.5', '5.0', '6.0'],
    brand: 'Jordan',
    material: 'Leather',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05aeb54f-ca86-48d9-a60f-57d798e3935d/air-max-95-shoes-TJLLsB.png'
  },
  {
    name: 'Nike Air Force 2',
    category: 'Jordan',
    price: '100',
    gender: 'Mens Shoes',
    color: ['red', 'white', 'black'],
    size: ['5.5', '5.0', '6.0'],
    brand: 'Nike Sportwear',
    material: 'Leather',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/358b5ffe-0704-4c5a-89fd-0fa5b2b1f99b/air-max-plus-iii-shoe-3BSBtx.png'
  },
  {
    name: 'Nike Air Force 3',
    category: 'Lifestyle',
    price: '198',
    gender: 'Mens Shoes',
    color: ['red'],
    size: ['3.5', '4.0', '5.5', '6.0', '7.0'],
    brand: 'NikeLab',
    material: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/312e0df6-a0c6-4a5d-ba01-e837b3d8ee49/jordan-delta-3-sp-shoes.png'
  },
  {
    name: 'Nike Air Force 4',
    category: 'Football',
    price: '156',
    gender: 'Mens Shoes',
    color: ['red', 'green', 'pink'],
    size: ['3.5', '4.0', '5.5', '6.0', '7.0'],
    brand: 'Jordan',
    material: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4180e725-4966-463b-8c22-71e3ca6a9a55/air-jordan-2-retro-sp-shoes.png'
  },
  {
    name: 'Nike Air Force 5',
    category: 'Training & Gym',
    price: '178',
    gender: 'Mens Shoes',
    color: ['red', 'white', 'black', 'green', 'pink'],
    size: ['3.5', '4.0', '5.5', '6.0', '7.0'],
    brand: 'Nike By You',
    material: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0db30447-d199-4373-bf36-6cbb439e96c2/air-max-terrascape-90-shoes-wdBkKH.png'
  },
  {
    name: 'Nike Air Force 6',
    category: 'Skateboarding',
    price: '560',
    gender: 'Mens Shoes',
    color: ['red'],
    size: ['8.0', '7.0', '6.5', '6.0', '9.0'],
    brand: 'ACG',
    material: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6b5dd64-1a32-45f8-8f19-8f421a1cdd6d/air-max-terrascape-90-shoes-CRn0XW.png'
  },
  {
    name: 'Nike Air Force 7',
    category: 'Golf',
    price: '240',
    gender: 'Mens Shoes',
    color: ['red', 'white', 'black', 'green', 'pink'],
    size: ['8.0', '7.0', '6.5', '6.0', '9.0'],
    brand: 'NikeLab',
    material: 'Canvas',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/271371f3-0f5c-47c7-b4b4-f840e8b488c1/air-pegasus-83-shoes-hq200x.png'
  },
  {
    name: 'Nike Air Force 8',
    category: 'Tennis',
    price: '120',
    gender: 'Mens Shoes',
    color: ['red', 'green', 'pink',],
    size: ['8.0', '7.0', '6.5', '6.0', '9.0'],
    brand: 'ACG',
    material: 'Canvas',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b00a5170-20ed-4cda-9c69-6c1e0a04276e/air-force-1-07-shoes-KprQCr.png'
  }
]