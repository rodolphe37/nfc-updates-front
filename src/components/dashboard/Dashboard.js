import React from 'react';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import VisitsCard from './dashboardChartsCards/VisitsCard';
import ShopCard from './dashboardChartsCards/ShopCard';
import ActifUsersCard from './dashboardChartsCards/ActifUsersCard';
import FollowersCard from './dashboardChartsCards/FollowersCard';
import MonthlySalesCard from './dashboardChartsCards/MonthlySalesCard';
import EmailSubscriptionsCard from './dashboardChartsCards/EmailSubscriptionsCard';
import CompletedTasksCard from './dashboardChartsCards/CompletedTasksCard';
import TasksCardDashboard from './othersDashboardCards/TaskCardDashboard';
import EmployeesTab from './othersDashboardCards/EmployeesTab';


export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <VisitsCard />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <ShopCard />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <ActifUsersCard />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <FollowersCard />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <MonthlySalesCard />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <EmailSubscriptionsCard />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CompletedTasksCard />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <TasksCardDashboard />
        <EmployeesTab />
      </GridContainer>
    </div>
  );
}
