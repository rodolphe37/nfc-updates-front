// Monthly Sales Card
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import AccessTime from '@material-ui/icons/AccessTime';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
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

const Card5 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="danger" stats icon>
        <CardIcon color="success">
          <Icon>Monthly Sales</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Daily Sales</p>
        <h3 className={classes.cardTitle}>$23 750</h3>
        <Bar
          data={chartData3}
          options={{}}
        />
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Daily Sales</h4>
        <p className={classes.cardCategory}>
          <span className={classes.successText}>
            <ArrowUpward className={classes.upArrowCardCategory} />
            {' '}
55%
          </span>
          {' '}
                increase in today sales.
        </p>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime />
          {' '}
updated 4 minutes ago
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card5;
