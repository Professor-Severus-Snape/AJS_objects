import sortByPropeties from '../js/sortByPropeties';

test.each([
  [
    {
      attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    },
    ['there is no such key'],
    [{ key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }],
  ],
  [
    {
      attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    },
    [],
    [{ key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }],
  ],
  [
    {
      attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    },
    ['defence'],
    [{ key: 'defence', value: 40 }, { key: 'attack', value: 80 }, { key: 'health', value: 10 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }],
  ],
  [
    {
      attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    },
    ['name', 'level'],
    [{ key: 'name', value: 'мечник' }, { key: 'level', value: 2 }, { key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }],
  ],
  [
    {
      attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    },
    ['level', 'attack', 'defence'],
    [{ key: 'level', value: 2 }, { key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'name', value: 'мечник' }],
  ],
])('testing sortByPropeties function for object: %o and keyList: %s', (oldObj, keyList, newObj) => {
  const result = sortByPropeties(oldObj, keyList);
  expect(result).toEqual(newObj);
});
