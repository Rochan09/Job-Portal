// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export const API_ENDPOINTS = {
  // User endpoints
  LOGIN: `${API_BASE_URL}/user/login`,
  REGISTER: `${API_BASE_URL}/user/register`,
  LOGOUT: `${API_BASE_URL}/user/logout`,
  GET_USER: `${API_BASE_URL}/user/getuser`,
  
  // Job endpoints
  GET_ALL_JOBS: `${API_BASE_URL}/job/getall`,
  GET_JOB: `${API_BASE_URL}/job`,
  POST_JOB: `${API_BASE_URL}/job/post`,
  GET_MY_JOBS: `${API_BASE_URL}/job/getmyjobs`,
  UPDATE_JOB: `${API_BASE_URL}/job/update`,
  DELETE_JOB: `${API_BASE_URL}/job/delete`,
  
  // Application endpoints
  POST_APPLICATION: `${API_BASE_URL}/application/post`,
  GET_EMPLOYER_APPLICATIONS: `${API_BASE_URL}/application/employer/getall`,
  GET_JOBSEEKER_APPLICATIONS: `${API_BASE_URL}/application/jobseeker/getall`,
  DELETE_APPLICATION: `${API_BASE_URL}/application/delete`,
};

export default API_ENDPOINTS; 