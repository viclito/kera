import api from 'src/api/api';
import DataService from 'src/api/DataService';

// Fpc List
const getFPCList = async ({ limit, offset }) => {
  try {
    const response = await DataService.get(`${api.FpcListURL}?limit=${limit}&offset=${offset}`);
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch Fpc list:', error);
    throw error;
  }
};

// Fpc Details
const getFPCDetailsById = async (id) => {
  try {
    const response = await DataService.get(api.FpcDetailsURL.replace('{id}', id));
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch Fpc list:', error);
    throw error;
  }
};

// New FPC Service
const addNewFpc = async (payload) => {
  try {
    const response = await DataService.post(api.CreateFpcURL, payload);
    return response.data;
  } catch (error) {
    console.error('Failed to add new FPC:', error);
    throw error?.data?.message || 'An error occurred';
  }
};

export { addNewFpc, getFPCList, getFPCDetailsById };
