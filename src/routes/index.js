import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bio from '~/pages/Bio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Bio} />
    </Switch>
  );
}
