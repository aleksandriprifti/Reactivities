import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../modules/Activity';
import { NavBar } from './NavBar';
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { v4 as uuid } from 'uuid';
import agent from "../api/agent";
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  const handleCreateOrEditActivity = (activity: Activity) => {
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity]);
        setSelectedActivity(activity);
        setEditMode(false);
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, { ...activity, id: uuid() }])
        setSelectedActivity(activity);
        setEditMode(false);
      })
    }
  }

  const handleDeleteActivity = (id: string) => {
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)])
    })

    }

  //if(activityStore.loadingInitial) return <LoadingComponent content ="Loading app..."/>

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <ActivityDashboard
                activities={activityStore.activities}
                createOrEdit={handleCreateOrEditActivity}
                deleteActivity={handleDeleteActivity}
                 submitting={submitting}
            />
          </Grid>
        </Box>
      </Container>
    </Fragment >
  );
}

export default observer(App);
