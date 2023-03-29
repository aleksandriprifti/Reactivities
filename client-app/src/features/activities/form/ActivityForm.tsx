import React, { ChangeEvent, useState } from 'react'
import { Button, Card, Form, Segment, TextAreaProps } from 'semantic-ui-react';
import { Activity } from '../../../app/modules/Activity';
import { useStore } from '../../../app/stores/store';

interface Props {
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export const ActivityForm = ({ createOrEdit, submitting} : Props) => {

    const { activityStore } = useStore();
    const { selectedActivity, closeForm } = activityStore;


    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setACtivity] = useState<Activity>(initialState);

    //const handleSubmit = () => {
    //    createOrEdit(activity);
    //}

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = event.target;
        setACtivity({ ...activity, [name]: value })
    }

        return (
            <Segment clearing>
                <Form o autocompete="off">
                    <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} />
                    <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange} />
                    <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} />
                    <Form.Input type="date" placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
                    <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
                    <Form.Input placeholder="Venuw" value={activity.venue} name="venue" onChange={handleInputChange} />
                    <Button variant="contained" positive type="submit" content="Submit" />
                    <Button variant="contained" content="Cancel" onClick={closeForm} />
                </Form>
            </Segment>
        )
}

