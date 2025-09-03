const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
const duplicatedIndexes = arr.indexOf(5, 1);
if (duplicatedIndexes !== -1) {
  arr.splice(duplicatedIndexes, 1);
}

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
