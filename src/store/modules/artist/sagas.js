import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format } from 'date-fns';

import api from '~/services/api';

import { getCollectionFailure, getCollectionSuccess } from './actions';

export function* getCollectionRequest({ payload: { artistName } }) {
  try {
    const queryName = String(artistName)
      .trim()
      .replace(/( )+/gi, '+');

    const responseCollections = yield call(
      api.get,
      `search?term=${queryName}&entity=album&limit=3`
    );

    const collectionsIds = responseCollections.data.results.map(
      collection => collection.collectionId
    );

    const responseTracks = yield all([
      ...collectionsIds.map(id => call(api.get, `lookup?id=${id}&entity=song`)),
    ]);

    const collections = responseTracks.map(data => {
      const collection = data.data.results.shift();
      return {
        id: collection.collectionId,
        amgArtistId: collection.amgArtistId,
        viewUrl: collection.collectionViewUrl,
        coverUrl: collection.artworkUrl100,
        name: collection.collectionCensoredName,
        trackCount: collection.trackCount,
        notes: collection.copyright,
        tracks: data.data.results.map(track => ({
          id: track.trackId,
          name: track.trackName,
          artistName: track.artistName,
          coverUrl: track.artworkUrl100,
          duration: format(track.trackTimeMillis, 'mm:ss'),
        })),
      };
    });

    yield put(getCollectionSuccess(collections));
  } catch (err) {
    yield put(getCollectionFailure());
  }
}

export default all([
  takeLatest('@artist/GET_COLLECTION_REQUEST', getCollectionRequest),
]);
