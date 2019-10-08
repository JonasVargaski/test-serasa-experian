export function getCollectionRequest(data) {
  return {
    type: '@artist/GET_COLLECTION_REQUEST',
    payload: data,
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
