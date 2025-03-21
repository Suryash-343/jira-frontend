import {createAsyncThunk } from '@reduxjs/toolkit';

import {
  createTaskApi,
  fetchTeamMemberListApi,
  findAllTaskOfTeamMemberApi,
  getAllTaskApi,
  updateTaskStatusApi
} from '../../api/taskApi';
import { toast } from 'react-toastify';



export const createTask = createAsyncThunk(
  'task/createTask',
  async (
    body: any,
    { rejectWithValue },
  ) => {
    try {
      const response = await createTaskApi(body);
      console.log(response, '====')
      toast.success('Task Creation Successful!')

      return response;
    } catch (error: any) {
      toast.error('Task Creation Failed!')

      return rejectWithValue(error.response?.data?.message || 'Task Creation failed');
    }
  },
);
export const updateTaskStatus = createAsyncThunk(
  'task/updateTaskStatus',
  async (
    {id, body}: any,
    { rejectWithValue },
  ) => {
    try {
      const response = await updateTaskStatusApi(id, body);
      toast.success('Task Status Updation Successful!')

      return response;
    } catch (error: any) {
      toast.error('Task Status Updation Failed!')

      return rejectWithValue(error.response?.data?.message || 'Task Status Updation failed');
    }
  },
);

export const getAllTask = createAsyncThunk(
  'task/getAllTask',
  async (
    url: any,
    { rejectWithValue },
  ) => {
    try {
      const response = await getAllTaskApi(url);
      console.log(response, '====')
      toast.success('Task List Retrieval Successful!')

      return response;
    } catch (error: any) {
      toast.error('Task List Retrieval Failed!')

      return rejectWithValue(error.response?.data?.message || 'Task List Retrieval failed');
    }
  },
);
export const fetchTeamMemberList = createAsyncThunk(
  'task/fetchTeamMemberList',
  async (
    body: any,
    { rejectWithValue },
  ) => {
    try {
      const response = await fetchTeamMemberListApi(body);
      toast.success('Team List Retrieval Successful!')

      return response;
    } catch (error: any) {
      toast.error('Team List Retrieval Failed!')

      return rejectWithValue(error.response?.data?.message || 'Team List Retrieval failed');
    }
  },
);
export const findAllTaskOfTeamMember = createAsyncThunk(
  'task/findAllTaskOfTeamMember',
  async (
    body: any,
    { rejectWithValue },
  ) => {
    try {
      const response = await findAllTaskOfTeamMemberApi(body);
      toast.success('Team Task List Retrieval Successful!')

      return response;
    } catch (error: any) {
      toast.error('Team Task List Retrieval Failed!')

      return rejectWithValue(error.response?.data?.message || 'Team Task List Retrieval failed');
    }
  },
);


