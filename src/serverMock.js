let idCounter = 4

let mockData = [
  {
    id:1,
    name: "Bread",
    quantity: 3,
    price: 13,
    description:'Not the black one please'
  },
  {
    id:2,
    name: "Bread2",
    quantity: 3,
    price: 13,
    description:'Not the black one please'
  },
  {
    id:3,
    name: "Bread3",
    quantity: 4,
    price: 3,
    description:'Not the black one please',
    checked:true,
  },
];


export const getListItem = () => (mockData);

export const deleteListItem = id => {
  mockData = mockData.filter(item => (item.id !== id));
  return mockData;
};

export const updateListItem = updatedItem => {
  mockData = mockData.map(item => (item.id === updatedItem.id? updatedItem: item));
  return mockData;
}

export const addListItem = name => {
  mockData.push(
    {
      id: idCounter,
      name: name,
      quantity: 1,
      price: 0,
      description:'',
    }
  );
  idCounter += 1;
  return mockData;
}