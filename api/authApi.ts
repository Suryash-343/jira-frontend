import AXIOS from '../config/Axios';
import Prefix from '../config/ApiPrefix';

export const loginApi = async (data: {
  email: string;
  password: string;
}) => {
  console.log(`${Prefix.api}/auth/login/`, '--->>>url')
  const response = await AXIOS.post(`${Prefix.api}/auth/login/`, data);
  return response.data;
};
export const registerApi = async (data: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const response = await AXIOS.post(`${Prefix.api}/auth/register/`, data);
  return response.data;
};

export const forgotPasswordApi = async (email: string) => {
  const response = await AXIOS.post(`${Prefix.api}/auth/forgot-password/`, {
    email,
  });
  return response.data;
};

// Password Reset Confirmation
export const passwordResetConfirmApi = async (data: {
  token: string;
  password: string;
}) => {
  const response = await AXIOS.post(
    `${Prefix.api}/auth/password_reset/confirm/`,
    data,
  );
  return response.data;
};

// Change Password
export const changePasswordApi = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await AXIOS.post(`${Prefix.api}/users/changePassword`, data);
  return response.data;
};

// Get Short Profile
export const getShortProfileApi = async () => {
  const response = await AXIOS.get(`${Prefix.api}/auth/shortprofile/`);
  return response.data;
};
