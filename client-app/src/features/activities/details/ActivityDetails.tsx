import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../../../app/stores/store';


export function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if (!activity) return <></>;

    return (
        <>
            <Card >
                <CardMedia
                    sx={{ height: 140 }}
                    image={`/assests/categoryImages/${activity.category}.jpg`}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {activity.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {activity.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {activity.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {activity.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {activity.venue}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => openForm(activity.id)}>Edit</Button>
                    <Button size="small" onClick={cancelSelectedActivity}>Cancel</Button>
                </CardActions>
            </Card>
        </>
    );
}
