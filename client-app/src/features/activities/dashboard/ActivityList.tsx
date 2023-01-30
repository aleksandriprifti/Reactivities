import React from 'react';
import { Activity } from '../../../app/modules/activities';
import { Button, Typography, Box, AspectRatio, Card } from '@mui/joy';
import { Divider, Stack } from '@mui/material';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <div>
            {activities.map(activity => (
                <Card key={activity.id} variant="outlined" sx={{ width: 620 }}>
                    <Typography level="h3" fontSize="sx" sx={{ mb: 1.0 }}>
                        {activity.title}
                    </Typography>
                    <Typography level="body2">{activity.date}</Typography>
                    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                        <img src={`/assest/categoryImages/${activity.category}.jpg`} />
                    </AspectRatio>
                    <Box sx={{ display: 'flex' }}>
                        <div>
                            <Typography level="h4">{activity.description}</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                {activity.city}
                            </Typography>
                        </div>
                        <div style={{ marginLeft: 100 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                divider={<Divider orientation="vertical" flexItem />}
                                alignItems="center"
                            >
                                <Button
                                    variant="solid"
                                    size="md"
                                    color="primary"
                                    aria-label="Explore Bahamas Islands"
                                    sx={{ ml: 'auto', fontWeight: 600, width: 100 }}
                                    onClick={() => selectActivity(activity.id)}
                                >
                                    View
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="md"
                                    color="danger"
                                    aria-label="Explore Bahamas Islands"
                                    sx={{ ml: 'auto', fontWeight: 600, width: 100 }}
                                    onClick={() => deleteActivity(activity.id)}
                                >
                                    Delete
                                </Button>
                            </Stack>
                        </div>
                    </Box>
                </Card>
            ))}
        </div>
    )
}

export default ActivityList