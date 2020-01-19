// Visites Card
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import Warning from '@material-ui/icons/Warning';
import {
  chartData2,
} from '../components/variables/charts';
import CardFooter from '../components/Card/CardFooter';
import CardIcon from '../components/Card/CardIcon';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';
import Danger from '../components/Typography/Danger';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Card1 = () => {
  const classes = useStyles();
  return (

    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
          <Icon>Visites</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>per Day</p>
        <Doughnut
          data={chartData2}
          options={{}}
        />
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <Danger>
            <Warning />
          </Danger>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
      Get more infos !
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card1;
