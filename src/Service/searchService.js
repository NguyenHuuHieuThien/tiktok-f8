import * as httpRequest from '~/utils/httpRequest';

export const search = async (debounced, type = 'less') => {
  try {
    const result = await httpRequest.get(`users/search?q=${encodeURIComponent(debounced)}&type=${type}`);
    return result.data;
  } catch (error) {
    console('error', error);
    return;
  }
};
