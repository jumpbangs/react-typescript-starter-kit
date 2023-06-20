import ky from 'ky';

import { COIN_DESK_API } from 'src/services/urls';

const apiOptions = {
  prefixUrl: COIN_DESK_API,
};

const apiClient = ky.extend(apiOptions);

export const fetchCoinsData = async () => {
  const response = await apiClient.get('v1/bpi/currentprice.json').json();
  return response;
};
