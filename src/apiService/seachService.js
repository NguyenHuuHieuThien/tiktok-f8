import request from '~/utils/request';

export const search = async (debounced, type = 'less') => {
  try {
    const result = await request.get(`users/search?q=${encodeURIComponent(debounced)}&type=${type}`);
    return result.data;
  } catch (error) {
    console('error', error);
    return;
  }
};
