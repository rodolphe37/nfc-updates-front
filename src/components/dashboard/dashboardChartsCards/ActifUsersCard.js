// Actif Users Card
import React from 'react';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import LocalOffer from '@material-ui/icons/LocalOffer';

import {
  chartData3,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card3 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="danger" stats icon>
        <CardIcon color="danger">
          <Icon>Actif Users</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Per Day</p>
        <h3 className={classes.cardTitle}>2375</h3>
        <Line
          data={chartData3}
          options={{}}
        />
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <LocalOffer />
                warranty from Google Analytics
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card3;
