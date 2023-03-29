import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Activity } from '../../../app/modules/Activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { Grid } from '@mui/material';
import { ActivityForm } from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


interface Props {
    activities: Activity[];
    createOrEdit: (activity: Activity) => void
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

const ActivityDashboard = ({ activities, deleteActivity, createOrEdit, submitting  }: Props) => {

    const { activityStore } = useStore();
    const { selectedActivity, editMode} = activityStore;

    const [displayForm, setForm] = useState(false);
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ActivityList
                        activities={activities}
                        deleteActivity={deleteActivity}
                        submitting={submitting}
                    />
                </Grid>
                <Grid item xs={4}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails />
                    }
                    {editMode &&
                        <ActivityForm
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                        />}
                </Grid>
            </Grid>
        </Box>

    )
}

export default observer(ActivityDashboard);
