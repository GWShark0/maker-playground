import last from 'lodash/last';
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';

// constants
export const EXPORT_DRAWER = 'EXPORT_DRAWER';
export const MEDIA_DIALOG = 'MEDIA_DIALOG';
export const TRIM_DIALOG = 'TRIM_DIALOG';
export const UPLOAD_DIALOG = 'UPLOAD_DIALOG';

function openUI(state, action) {
  const { uiType, uiProps } = action.payload;
  state.push({ uiType, uiProps });
}

const initialState = [];

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    close: (state) => {
      state.pop();
    },
    closeAll: () => {
      return initialState;
    },
    openExportDrawer: {
      reducer: openUI,
      prepare: (uiProps) => ({ payload: { uiType: EXPORT_DRAWER, uiProps } }),
    },
    openMediaDialog: {
      reducer: openUI,
      prepare: (uiProps) => ({ payload: { uiType: MEDIA_DIALOG, uiProps } }),
    },
    openTrimDialog: {
      reducer: openUI,
      prepare: (uiProps) => ({ payload: { uiType: TRIM_DIALOG, uiProps } }),
    },
    openUploadDialog: {
      reducer: openUI,
      prepare: (uiProps) => ({ payload: { uiType: UPLOAD_DIALOG, uiProps } }),
    },
  },
});

// actions
export const {
  close,
  closeAll,
  openExportDrawer,
  openMediaDialog,
  openTrimDialog,
  openUploadDialog,
} = uiSlice.actions;

// selectors
const selectCurrentUI = (state) => last(state.ui) || {};
const selectUIProps = (isOpen, { uiProps }) => (isOpen ? uiProps : {});

export const selectExportDrawerOpen = createSelector(
  selectCurrentUI,
  ({ uiType }) => uiType === EXPORT_DRAWER
);
export const selectMediaDialogOpen = createSelector(
  selectCurrentUI,
  ({ uiType }) => uiType === MEDIA_DIALOG
);
export const selectTrimDialogOpen = createSelector(
  selectCurrentUI,
  ({ uiType }) => uiType === TRIM_DIALOG
);
export const selectUploadDialogOpen = createSelector(
  selectCurrentUI,
  ({ uiType }) => uiType === UPLOAD_DIALOG
);

export const selectExportDrawerProps = createSelector(
  selectExportDrawerOpen,
  selectCurrentUI,
  selectUIProps
);
export const selectMediaDialogProps = createSelector(
  selectMediaDialogOpen,
  selectCurrentUI,
  selectUIProps
);
export const selectTrimDialogProps = createSelector(
  selectTrimDialogOpen,
  selectCurrentUI,
  selectUIProps
);
export const selectUploadDialogProps = createSelector(
  selectUploadDialogOpen,
  selectCurrentUI,
  selectUIProps
);

export default uiSlice.reducer;
