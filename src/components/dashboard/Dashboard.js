import React from 'react';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import Card1 from './dashboardChartsCards/Card1';
import Card2 from './dashboardChartsCards/Card2';
import Card3 from './dashboardChartsCards/Card3';
import Card4 from './dashboardChartsCards/Card4';
import Card5 from './dashboardChartsCards/Card5';
import Card6 from './dashboardChartsCards/Card6';
import Card7 from './dashboardChartsCards/Card7';
import TasksCardDashboard from './othersDashboardCards/TaskCardDashboard';
import EmployeesTab from './othersDashboardCards/EmployeesTab';


export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          {/* Visites Card */}
          <Card1 />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          {/* Shop Card */}
          <Card2 />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          {/* Actif Users Card */}
          <Card3 />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          {/* Followers Card */}
          <Card4 />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          {/* Monthly Sales Card */}
          <Card5 />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          {/* Email Subscriptions Card */}
          <Card6 />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          {/* Completed Tasks Card */}
          <Card7 />
        </GridItem>
      </GridContainer>
      <GridContainer>
        {/* Tasks Card */}
        <TasksCardDashboard />
        {/* Employees Stats Card */}
        <EmployeesTab />
      </GridContainer>
    </div>
  );
}
