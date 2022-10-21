import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
  },
});
export const { addContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
