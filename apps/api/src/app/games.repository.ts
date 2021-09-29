const games = [
  {
    id: 'first id',
    name: 'first name',
    description: 'first description',
    price: 35,
    rating: Math.random(),
    image: '/assets/img.jpg',
  },
  {
    id: 'second id',
    name: 'second name',
    description: 'second description',
    price: 100,
    rating: Math.random(),
    image: '/assets/img.jpg',
  },
  {
    id: 'third id',
    name: 'third name',
    description: 'third description',
    price: 40,
    rating: Math.random(),
    image: '/assets/img.jpg',
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
