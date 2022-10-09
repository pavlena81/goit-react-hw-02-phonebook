import { FormLabel } from './Form/Form';
// import { FormContacts } from './Contacts/Contacts';
import { Component } from 'react';

export class App extends Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      
    };

    this.setState({
      contacts: this.state.contacts.concat(newContact)
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.name.first !== id);
    this.setState({
      contacts: [...filtered]
    });
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
      <FormLabel />
      {/* <FormContacts onChange={this.handleChange} onSubmit={this.addContact} />  */}
      
    </div>
  );
}
}
  
