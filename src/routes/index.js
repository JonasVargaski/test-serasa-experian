import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Playlists from '~/pages/Playlists';

export default function Routes() {
  return (
    <Switch>
      <Route path="/playlists" component={Playlists} />
      <Redirect to="/playlists" />
    </Switch>
  );
}
