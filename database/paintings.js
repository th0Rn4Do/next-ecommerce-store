// import fs from 'node:fs';

// fs.readFile('../app/page.js', () => {});

export const paintings = [
  {
    id: 1,
    name: 'No. 1 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
  },
  {
    id: 2,
    name: 'No. 2 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
  },
  {
    id: 3,
    name: 'No. 3 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
  },
  {
    id: 4,
    name: 'No. 4 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
  },
  {
    id: 5,
    name: 'No. 5 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
  },
];

export function getPaintingsById(id) {
  return paintings.find((painting) => painting.id === id);
}
