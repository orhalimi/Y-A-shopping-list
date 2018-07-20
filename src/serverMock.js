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

//to simulate server
const returnAsPromise = (data) => (new Promise(r => r(data)))

export const getListItem = () => (returnAsPromise(mockData));

export const deleteListItem = id => {
  mockData = mockData.filter(item => (item.id !== id))
  console.log(mockData)
  return returnAsPromise(mockData)
};

export const updateListItem = updatedItem => {
  mockData = mockData.map(item => (item.id === updatedItem.id? updatedItem: item))
  return returnAsPromise(mockData)
}