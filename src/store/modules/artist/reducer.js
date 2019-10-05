import produce from 'immer';

const INITIAL_STATE = {
  artist: {
    id: 909253,
    amgId: 468749,
    name: 'Queen',
    coverUrl: `https://www.eventim.com.br/obj/media/BR-eventim/campaign/jbj/img/photo-bonjovi-001.jpg`,
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae aspernatur aperiam nihil fugiat delectus eos molestias,
            provident itaque est numquam ut autem deleniti sed maxime vero
            sunt ipsam quibusdam sequi.`,
    origin: 'Alabana',
    genre: 'Rock',
    born: 'Sep, 27 2000',
    collections: [],
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
