import { FormLabel } from './Form/Form';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts';
import { Component } from 'react';
import { nanoid } from "nanoid";

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

     this.setState(({ contacts }) => ({
       contacts: [contact, ...contacts],
     }));
     console.log('hello')
     console.log(this.state.contacts)
  }


  onDelete = id => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.name.first !== id);
    this.setState({
      contacts: [...filtered]
    });
  };
   
  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };



  handleSubmit = ( values, { resetForm }) => {
    console.log(values);
    values.id = nanoid();
    this.addContact(values);
    resetForm();
  };

  render() {
    
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1> 
        <FormLabel handleSubmit={this.handleSubmit} />
        <Filter />
         <FormContacts contacts={this.state.contacts}
                      onDelete={this.onDelete}   />       
    </div>
  );
}
}
  
