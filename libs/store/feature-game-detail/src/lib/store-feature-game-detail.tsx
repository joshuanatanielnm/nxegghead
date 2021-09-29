import './store-feature-game-detail.module.scss';

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
  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.match.params.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default StoreFeatureGameDetail;
