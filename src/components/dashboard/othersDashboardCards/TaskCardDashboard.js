// Tasks Card
import React from 'react';

import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
import CustomTabs from '../components/CustomTabs/CustomTabs';
import Tasks from '../components/Tasks/Tasks';
import { bugs, website, server } from '../components/variables/general';

import GridItem from '../components/Grid/GridItem';

const TasksCardDashboard = () => (

  <GridItem xs={12} sm={12} md={6}>
    <CustomTabs
      title="Tasks:"
      headerColor="primary"
      tabs={[
        {
          tabName: 'Bugs',
          tabIcon: BugReport,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          ),
        },
        {
          tabName: 'Website',
          tabIcon: Code,
          tabContent: (
            <Tasks
              checkedIndexes={[0]}
              tasksIndexes={[0, 1]}
              tasks={website}
            />
          ),
        },
        {
          tabName: 'Server',
          tabIcon: Cloud,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={server}
            />
          ),
        },
      ]}
    />
  </GridItem>
);

export default TasksCardDashboard;
