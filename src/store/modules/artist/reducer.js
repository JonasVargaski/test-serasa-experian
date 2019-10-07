import produce from 'immer';

const INITIAL_STATE = {
  artist: {
    id: 909253,
    amgId: 468749,
    name: 'Queen',
    profileUrl: 'https://music.apple.com/artist/queen/3296287',
    coverUrl: `https://i.ytimg.com/vi/_Uu12zY01ts/maxresdefault.jpg`,
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae aspernatur aperiam nihil fugiat delectus eos molestias,
            provident itaque est numquam ut autem deleniti sed maxime vero
            sunt ipsam quibusdam sequi.`,
    origin: 'Test',
    genre: 'Rock, Pop',
    born: 'Sep, 27 2002',
    collections: [],
    featuredArtistis: [
      {
        id: 151502,
        imageUrl: 'https://i.ytimg.com/vi/3p4MZJsexEs/hqdefault.jpg',
        name: 'Test',
        genre: 'Rock',
      },
    ],
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@artist/GET_COLLECTION_SUCCESS': {
        draft.artist.collections = action.payload.collections;
        break;
      }
      default:
    }
  });
}
