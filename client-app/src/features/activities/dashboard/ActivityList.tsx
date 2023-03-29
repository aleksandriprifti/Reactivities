import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Activity } from '../../../app/modules/Activity';
import { Button, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useStore } from '../../../app/stores/store';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface Props {
    activities: Activity[];
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export const ActivityList = ({ activities, deleteActivity, submitting }: Props) => {

    const { activityStore } = useStore();

    const theme = useTheme();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {activities.map(activity => (

                            <Box sx={{ flexGrow: 1, marginBottom: 2 }} key={activity.id}>
                                <Card sx={{ display: 'flex' }} >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 300 }}
                                        image={`/assests/categoryImages/${activity.category}.jpg`}
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {activity.title}
                                            </Typography>
                                            <Typography component="div" >
                                                {activity.date}
                                            </Typography>
                                            <Typography component="div" >
                                                {activity.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {activity.city}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {activity.venue}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant='outlined' onClick={() => activityStore.selectActivity(activity.id)} >View</Button>
                                            <Button size="small" variant='contained' onClick={() => deleteActivity(activity.id)} >Delete</Button>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Box>
                        ))
                        }
                    </Grid>
                </Grid >
            </Box >


        </>

    )
}
