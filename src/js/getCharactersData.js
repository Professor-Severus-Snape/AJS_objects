// 1-ый вариант (с дефолтным значением):
export default function getCharactersData({ special }) {
  const result = special.map((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;
    return {
      id,
      name,
      icon,
      description,
    };
  });
  return result;
}

// 2-ой вариант (с созданием свойства и присвоением значения):
// export default function getCharactersData({ special }) {
//   const result = special.map((item) => {
//     const newItem = { ...item };
//     if (!('description' in item)) {
//       newItem.description = 'Описание недоступно';
//     }
//     return newItem;
//   });
//   return result;
// }

// 3-ий вариант (с изменением возвращаемого объекта):
// export default function getCharactersData({ special }) {
//   const result = special.map((item) => {
//     if (!('description' in item)) {
//       return { ...item, description: 'Описание недоступно' };
//     }
//     return item;
//   });
//   return result;
// }
