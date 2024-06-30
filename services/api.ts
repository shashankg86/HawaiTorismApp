import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mockapi.io/projects/60c72b2a97d2c40017949bc7',
});

export const fetchActivities = async () => {
  try {
    const response = await api.get('/activities');
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};
