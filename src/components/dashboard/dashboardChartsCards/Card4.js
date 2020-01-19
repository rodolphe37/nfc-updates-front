// Followers Card
import React from 'react';
import { Pie } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';

import Accessibility from '@material-ui/icons/Accessibility';
import Update from '@material-ui/icons/Update';
import {
  chartData2,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card4 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <Accessibility />
        </CardIcon>
        <p className={classes.cardCategory}>Followers</p>
        <h3 className={classes.cardTitle}>+24500</h3>
        <Pie
          data={chartData2}
          options={{}}
        />
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <Update />
                Just Updated
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card4;
