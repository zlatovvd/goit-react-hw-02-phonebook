import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

const CONTACTS = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...CONTACTS,
  };

  onSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    if (!contacts.some(value => value.name.includes(name))) {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      contacts.push(contact);
      this.setState({ contacts: contacts });
    } else {
      alert(`${name} is alredy in contacts`);
    }
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    this.filter(value);
  };

  filter = () => {
    const { contacts, filter } = this.state;
    let filterList = contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterList;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          paddingLeft: '40px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList contacts={this.filter()} />
      </div>
    );
  }
}

export default App;
