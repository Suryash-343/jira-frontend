import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './taskTypes';
import {
    createTask,
    fetchTeamMemberList,
    findAllTaskOfTeamMember,
    getAllTask,
    updateTaskStatus
} from './taskActions';

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
   clearState: (state)=> {
    state.taskList=[]
   },
    
  },
  extraReducers: (builder) => {
    builder
      // Login Cases
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createTask.fulfilled,
        (
          state,
          action: PayloadAction<any>,
        ) => {
          state.loading = false;
          state.createTaskResp= action.payload
        },
      )
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllTask.fulfilled,
        (
          state,
          action: PayloadAction<any>,
        ) => {
          state.loading = false;
          state.taskList= action.payload
        },
      )
      .addCase(getAllTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateTaskStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateTaskStatus.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          // state.taskList= action.payload
        },
      )
      .addCase(updateTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTeamMemberList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTeamMemberList.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.teamList= action.payload
        },
      )
      .addCase(fetchTeamMemberList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(findAllTaskOfTeamMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        findAllTaskOfTeamMember.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.taskList= action.payload
        },
      )
      .addCase(findAllTaskOfTeamMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

     
     
  },
});

export const { clearState } = taskSlice.actions;
export default taskSlice.reducer;
