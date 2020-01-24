// Employees Stats Card
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle';

import CardBody from '../components/Card/CardBody';
import CardHeader from '../components/Card/CardHeader';
import Card from '../components/Card/Card';
import Table from '../components/Table/Table';

import GridItem from '../components/Grid/GridItem';

const useStyles = makeStyles(styles);

const EmployeesTab = () => {
  const classes = useStyles();
  return (


    <GridItem xs={12} sm={12} md={6}>
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
          <p className={classes.cardCategoryWhite}>
          New employees on 15th September, 2016
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={['ID', 'Name', 'Salary', 'Country']}
            tableData={[
              ['1', 'Dakota Rice', '$36,738', 'Niger'],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South'],
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default EmployeesTab;
