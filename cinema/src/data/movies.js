const posters = {
    ...import.meta.glob('../assets/*.jpg', { eager: true, as: 'url' }),
    ...import.meta.glob('../assets/*.png', { eager: true, as: 'url' })
  };
export const movies = [
  {
    id: 1,
    title: "Дюна: Частина друга",
    description: "Епічний науково-фантастичний фільм про боротьбу за пустельну планету Арракіс.",
    genre: "Наукова фантастика",
    poster: posters['../assets/dune.jpg'],
    session: "2025-04-17 18:30"
  },
  {
    id: 2,
    title: "Барбі",
    description: "Яскрава комедія про пригоди Барбі у реальному світі.",
    genre: "Комедія",
    poster: posters['../assets/barbie.jpg'],
    session: "2025-04-17 20:00"
  },
  {
    id: 3,
    title: "Оппенгеймер",
    description: "Біографічна драма про творця атомної бомби.",
    genre: "Драма",
    poster: posters['../assets/oppenheimer.png'],
    session: "2025-04-18 19:00"
  }
];
