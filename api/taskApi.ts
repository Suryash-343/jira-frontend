import AXIOS from '../config/Axios';
import Prefix from '../config/ApiPrefix';

export const createTaskApi = async (body: any) => {
  const response = await AXIOS.post(`${Prefix.api}/tasks`, body);
  return response.data;
};
export const getAllTaskApi = async (url: any) => {
  const response = await AXIOS.get(`${Prefix.api}/tasks/${url? url: ''}`);
  return response.data;
};
export const updateTaskStatusApi = async (id: any, body: any) => {
  const response = await AXIOS.patch(`${Prefix.api}/tasks/${id}`, body);
  return response.data;
};
export const fetchTeamMemberListApi = async (body: any) => {
  const response = await AXIOS.post(`${Prefix.api}/tasks/fetchTeamMemberList`, body);
  return response.data;
};
export const findAllTaskOfTeamMemberApi = async (body: any) => {
  const response = await AXIOS.post(`${Prefix.api}/tasks/findAllTaskOfTeamMember`, body);
  return response.data;
};


