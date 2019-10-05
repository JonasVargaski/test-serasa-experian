export function getCollectionRequest(artistName) {
  return {
    type: '@artist/GET_COLLECTION_REQUEST',
    payload: { artistName },
  };
}

export function getCollectionSuccess(collections) {
  return {
    type: '@artist/GET_COLLECTION_SUCCESS',
    payload: { collections },
  };
}

export function getCollectionFailure() {
  return {
    type: '@artist/GET_COLLECTION_FAILURE',
  };
}
