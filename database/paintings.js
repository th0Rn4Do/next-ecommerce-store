export const paintings = [
  { id: 1, name: 'gigi', type: 'cat', object: 'rat' },
  { id: 2, name: 'freddy', type: 'dog', object: 'biscuit' },
  { id: 3, name: 'bob', type: 'trashpanda', object: 'candy' },
  { id: 4, name: 'nagini', type: 'snake', object: 'band' },
  { id: 5, name: 'kunfu', type: 'panda', object: 'food' },
];

export function getPaintingsById(id) {
  return paintings.find((painting) => painting.id === id);
}
