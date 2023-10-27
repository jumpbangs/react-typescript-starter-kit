import React from 'react';

import { ZERO } from 'common/constants';
import { Container } from 'components';
import { fetchCoinsData } from 'services/coinDeskService';

import Table from './component/Table';

const CoinDeskPage = () => {
  const [coinsData, setCoinsData] = React.useState<any>([]);

  const fetchingCoinsData = async () => {
    const data: any = await fetchCoinsData();
    if (data !== undefined) {
      const tableData = {
        tableData: data?.bpi,
        tableDetail: data?.time.updated,
        tableName: data?.chartName,
      };
      setCoinsData(tableData);
    }
  };

  React.useEffect(() => {
    fetchingCoinsData();
  }, []);

  return (
    <div>
      <h1>CoinDesk Table</h1>
      <Container>
        <h3>This table data is fetched from CoinDesk Api.</h3>
        <p>
          The following api called is handled by <a href="https://github.com/sindresorhus/ky">ky</a>{' '}
          HTTP client package.
        </p>
        {coinsData.length !== ZERO && (
          <Table
            data={coinsData.tableData}
            tableDetail={coinsData.tableDetail}
            tableName={coinsData.tableName}
          />
        )}
      </Container>
    </div>
  );
};

export default CoinDeskPage;
