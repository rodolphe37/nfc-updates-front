// Email Subscriptions Card
import React from 'react';
import { Pie } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import AccessTime from '@material-ui/icons/AccessTime';
import {
  chartData3,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardBody from '../components/Card/CardBody';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card6 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="danger" stats icon>
        <CardIcon color="warning">
          <Icon>Email Subscriptions</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Monthly</p>
        <h3 className={classes.cardTitle}>12187</h3>
        <Pie
          data={chartData3}
          options={{}}
        />
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Email Subscriptions</h4>
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

export default Card6;
