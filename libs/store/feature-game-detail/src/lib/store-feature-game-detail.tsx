import './store-feature-game-detail.module.scss';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { formatRating } from '@nxegghead/store/util-formatters';
import { Game } from '@nxegghead/api/util-interface';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
/* eslint-disable-next-line */
type TParams = { id: string };
export type StoreFeatureGameDetailProps = RouteComponentProps<TParams>;

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  const [state, setState] = useState<{
    data: Game;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: {
      description: '',
      id: '',
      image: '',
      name: '',
      price: 0,
      rating: 0,
    },
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const gameId = props.match.params.id;
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState({ ...state, data: res, loadingState: 'success' });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [props.match.params.id]);

  return (
    <div className="container">
      {state.loadingState === 'loading' ? (
        'loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error retrieving data</div>
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                color="textSecondary"
                className="game-rating"
              >
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}

export default StoreFeatureGameDetail;
