import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectName: 'My Cool Project',
  },
  reducers: {
    renameProject: (state, action) => {
      state.projectName = action.payload;
    },
  },
});

// actions
export const { renameProject } = projectSlice.actions;

// selectors
export const selectProjectName = (state) => state.project.projectName;

export default projectSlice.reducer;
