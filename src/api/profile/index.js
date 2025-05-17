import api from 'src/api/api';
import DataService from 'src/api/DataService';

const getProfileDetails = async () => {
  try {
    const response = await DataService.get(api.CompleteRegistrationURL);
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch profile details:', error);
    throw error;
  }
};

export { getProfileDetails };
