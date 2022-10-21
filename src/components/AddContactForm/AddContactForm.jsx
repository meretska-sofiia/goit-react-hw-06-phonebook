import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Form, Input, Button } from './AddContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.name.value, form.number.value));
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          type="tel"
          name="number"
          placeholder="Enter contact number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
