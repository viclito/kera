import api from 'src/api/api';
import DataService from 'src/api/DataService';

// District List
const getDistrictsList = async () => {
  try {
    const response = await DataService.get(api.DistrictListURL);
    return response?.data?.results;
  } catch (error) {
    console.error('Failed to fetch district list:', error);
    throw error;
  }
};

// Village List
const getVillageList = async () => {
  try {
    const response = await DataService.get(api.VillageListURL);
    return response?.data?.results;
  } catch (error) {
    console.error('Failed to fetch village list:', error);
    throw error;
  }
};

// Taluk List
const getTalukList = async () => {
  try {
    const response = await DataService.get(api.TalukListURL);
    return response?.data?.results;
  } catch (error) {
    console.error('Failed to fetch taluk list:', error);
    throw error;
  }
};




// Fpc List
const getBlock = async ({ limit, offset , district_id}) => {
  try {
    let url = `${api.BlockUrl}?limit=${limit}&offset=${offset}`;
    if (district_id) {
      url += `&district_id=${district_id}`;
    }
    const response = await DataService.get(url);
    return response?.data;
  } catch (error) {
    console.error('Failed to Block list:', error);
    throw error;
  }
};

// Fpc Details
const getDistrict = async ({limit, offset , region_id}) => {
  try {
    let url = `${api.DistrictUrl}?limit=${limit}&offset=${offset}`;
    if (region_id) {
      url += `&region_id=${region_id}`;
    }
    const response = await DataService.get(url);
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch District list:', error);
    throw error;
  }
};

// Fpc List
const getRegion = async ({ limit, offset }) => {
  try {
    const response = await DataService.get(`${api.RegionUrl}?limit=${limit}&offset=${offset}`);
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch Region list:', error);
    throw error;
  }
};

export { 
  getBlock,
  getRegion,
  getDistrict,
  getTalukList,
  getVillageList,
  getDistrictsList,
 };
