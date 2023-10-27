interface BPI_DATA_PROPS {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface COIN_DESK_RESPONSE_PROPS {
  chartName: string;
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  bpi?: Record<string, BPI_DATA_PROPS>;
}
