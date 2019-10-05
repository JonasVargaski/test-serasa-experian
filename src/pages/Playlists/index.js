import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Cover, Container } from './styles';
import Bio from './Bio';
import Collection from './Collection';
import FeaturedArtist from './FeaturedArtistis';

import { getCollectionRequest } from '~/store/modules/artist/actions';

export default function Artist() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionRequest('Kiss'));
  }, [dispatch]);

  const { artist } = useSelector(state => state.artist);

  return (
    <Wrapper>
      <Cover imageUrl={artist.coverUrl} />
      <Container>
        <Bio artist={artist} />
        <Collection collections={artist.collections} />
        <FeaturedArtist artists={artist.featuredArtistis} />
      </Container>
    </Wrapper>
  );
}
