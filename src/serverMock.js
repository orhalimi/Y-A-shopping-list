let idCounter = 3

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
    name: "Cola",
    quantity: 5,
    price: 3,
    description:'',
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