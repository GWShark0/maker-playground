import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import uiReducer from './uiSlice';

export default configureStore({
  reducer: {
    project: projectReducer,
    ui: uiReducer,
  },
});
