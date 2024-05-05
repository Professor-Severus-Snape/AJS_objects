export default function sortByPropeties(obj, keyList) {
  const clonedObj = { ...obj };
  const arr = [];

  keyList.forEach((item) => {
    if (Object.keys(clonedObj).includes(item)) {
      arr.push({ key: item, value: clonedObj[item] });
      delete clonedObj[item];
    }
  });

  Object.entries(clonedObj).sort().forEach(([key, value]) => {
    arr.push({ key, value });
  });

  return arr;
}
