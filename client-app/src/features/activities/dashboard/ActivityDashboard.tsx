import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Activity } from '../../../app/modules/Activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { Grid } from '@mui/material';
import { ActivityForm } from '../form/ActivityForm';


interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void
    deleteActivity: (id: string) => void;
}

export const ActivityDashboard = ({ activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity }: Props) => {

    const [displayForm, setForm] = useState(false);
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ActivityList
                        activities={activities}
                        selectActivity={selectActivity}
                        deleteActivity={deleteActivity}
                    />
                </Grid>
                <Grid item xs={4}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={cancelSelectActivity}
                            openForm={openForm}
                        />}
                    {editMode &&
                        <ActivityForm
                            displayForm={displayForm}
                            closeForm={closeForm}
                            activity={selectedActivity}
                            createOrEdit={createOrEdit}
                        />}

                </Grid>
            </Grid>
        </Box>

    )
}
