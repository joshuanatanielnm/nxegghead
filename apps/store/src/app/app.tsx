import './app.scss';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Header } from '@nxegghead/store/ui-shared';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { formatRating } from '@nxegghead/store/util-formatters';
import { Game } from '@nxegghead/api/util-interface';
import React, { useState, useEffect } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { Route, useHistory } from 'react-router-dom';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { StoreFeatureGameDetail } from '@nxegghead/store/feature-game-detail';
export function App() {
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });
  const history = useHistory();
  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
      .then((x) => x.json())
      .then((res) => {
        setState({ ...state, data: res, loadingState: 'success' });
      })
      .catch((err) => {
        setState({ ...state, loadingState: 'error' });
      });
  }, [state]);

  return (
    <>
      <Header title="Board Game Jojo" />
      <div className="container" data-testid="app-container">
        <div className="games-layout">
          {state.loadingState === 'loading' ? (
            'loading...'
          ) : state.loadingState === 'error' ? (
            <div>Error retrieving data</div>
          ) : (
            state.data.map((x) => (
              <Card
                key={x.id}
                className="game-card"
                onClick={() => history.push(`/game/${x.id}`)}
              >
                <CardActionArea>
                  <CardMedia
                    className="game-card-media"
                    image={x.image}
                    title={x.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {x.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {x.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      color="textSecondary"
                      className="game-rating"
                    >
                      <strong>Rating:</strong> {formatRating(x.rating)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          )}
        </div>
      </div>

      <Route path="/game/:id" component={StoreFeatureGameDetail} />
    </>
  );
}

export default App;
