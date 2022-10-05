import React from 'react';
import { Formik, Form, Field } from 'formik';

import styled from 'styled-components';

import { Label } from './Form.styled';


const initialValues = {
    name: '',
};

const Input = styled(Field)`
font-size: 18px;
padding: 10px 15px;
margin: 10px;
border: 2px solid aqua;
border-radius: 2px;
`
export const FormLabel = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        
        resetForm();
}

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form autoComplete='off'>
                <Label htmlFor="Name">
                    Name
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}