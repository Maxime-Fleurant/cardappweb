import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/Redux';

export interface CardHeadState {
  modalOpen: boolean;
  form: { title?: string; desc?: string };
  saveForm: boolean;
}

const initialState: CardHeadState = {
  modalOpen: false,
  form: {},
  saveForm: false,
};

const cardHeadSlice = createSlice({
  name: 'cardHead',
  initialState,
  reducers: {
    triggerModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    updateFormTitle(state, action: PayloadAction<string>) {
      state.form.title = action.payload;
    },
    updateFormDesc(state, action: PayloadAction<string>) {
      state.form.desc = action.payload;
    },
    saveForm(state) {
      if (state.form.desc || state.form.title) {
        state.saveForm = true;
      }
    },
    clearForm(state) {
      state.saveForm = false;
      state.form = {};
    },
  },
});

export const {
  triggerModal,
  updateFormTitle,
  updateFormDesc,
  saveForm,
  clearForm,
} = cardHeadSlice.actions;

export const selectModalOpen = (state: RootState) => state.cardHead.modalOpen;
export const selectForm = (state: RootState) => state.cardHead.form;
export const selectSaveForm = (state: RootState) => state.cardHead.saveForm;

export default cardHeadSlice.reducer;
