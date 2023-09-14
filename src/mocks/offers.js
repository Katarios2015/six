const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: true,
      name: `Kate`
    },
    id: 2,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 548.859887,
      longitude: 2.349220,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 80,
    rating: 4.8,
    title: `Beautiful & luxurious room at great location`,
    type: `room`
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `img/1.png`,
      id: 5,
      isPro: true,
      name: `Roman`
    },
    id: 3,
    images: [`img/apartment-03.jpg`, `img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.934367,
      longitude: 6.950412,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious house at great location`,
    type: `house`
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.846697,
        longitude: 4.352544,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `img/1.png`,
      id: 6,
      isPro: true,
      name: `Alex`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.856117,
      longitude: 4.360602,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful hotel at great location`,
    type: `hotel`
  }
];

const reviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `A quiet cozy`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Gap`
    }
  },
  {
    comment: `the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Pop`
    }
  },
  {
    comment: `hides behind a river`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Ron`
    }
  },
];

export {offers, reviews};
