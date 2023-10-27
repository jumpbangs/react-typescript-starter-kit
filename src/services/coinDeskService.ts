import { toast } from 'react-toastify';
import ky from 'ky';

import { COIN_DESK_API } from 'services/urls';

const apiOptions = {
  prefixUrl: COIN_DESK_API,
};

const apiClient = ky.extend(apiOptions);

export const fetchCoinsData = async () => {
  try {
    const response = await apiClient.get('v1/bpi/currentprice.json').json();
    return response;
  } catch (err) {
    toast.error('Error while fetching coins data');
  }
};
