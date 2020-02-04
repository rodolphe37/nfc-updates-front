// Shop Card
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Store from '@material-ui/icons/Store';
import DateRange from '@material-ui/icons/DateRange';

import {
  chartData3,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';
import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card2 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="info" stats icon>
        <CardIcon color="info">
          <Store />
        </CardIcon>
        <p className={classes.cardCategory}>income</p>
        <h3 className={classes.cardTitle}>$34,245</h3>
        <Bar
          data={chartData3}
          options={{}}
        />
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
                Last 24 Hours
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card2;
