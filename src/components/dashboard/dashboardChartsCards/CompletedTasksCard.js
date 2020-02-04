// Completed Tasks Card
import React from 'react';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import AccessTime from '@material-ui/icons/AccessTime';
import {
  chartData,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardBody from '../components/Card/CardBody';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card7 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="danger" stats icon>
        <CardIcon color="info">
          <Icon>Completed Tasks</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>by cities</p>
        <h3 className={classes.cardTitle}>average by city</h3>
        <Line
          data={chartData}
          options={{}}
        />
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Completed Tasks</h4>
        <p className={classes.cardCategory}>Last Campaign Performance</p>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime />
          {' '}
campaign sent 2 days ago
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card7;
