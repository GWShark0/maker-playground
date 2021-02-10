import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isExportDrawerOpen: false,
  },
  reducers: {
    openExportDrawer: (state) => {
      state.isExportDrawerOpen = true;
    },
    closeExportDrawer: (state) => {
      state.isExportDrawerOpen = false;
    },
  },
});

export const { openExportDrawer, closeExportDrawer } = uiSlice.actions;

export default uiSlice.reducer;
