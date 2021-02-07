import { combineReducers } from 'redux';
import { FunctionComponent } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cardHeadSlice from '../features/Card/Head/HeadSlice';

const rootReducer = combineReducers({
  cardHead: cardHeadSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

const Redux: FunctionComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Redux;

export type RootState = ReturnType<typeof rootReducer>;
