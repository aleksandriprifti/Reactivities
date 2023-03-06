import React, { ChangeEvent, useState } from 'react'
import { Button, Card, Form, Segment, TextAreaProps } from 'semantic-ui-react';
import { Activity } from '../../../app/modules/Activity';

interface Props {
    activity: Activity | undefined;
    displayForm: boolean;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export const ActivityForm = ({ displayForm, closeForm, activity: selectedActivity, createOrEdit }: Props) => {

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

    const handleSubmit = () => {
        createOrEdit(activity);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setACtivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autocompete="off">
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} />
                <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange} />
                <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} />
                <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
                <Form.Input placeholder="Venuw" value={activity.venue} name="venue" onChange={handleInputChange} />
                <Button variant="contained" positive type="submit" content="Submit" />
                <Button variant="contained" content="Cancel" onClick={closeForm} />
            </Form>
        </Segment>



    )
}
