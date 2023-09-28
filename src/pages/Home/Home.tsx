import React from 'react';
import { Link } from 'react-router-dom';

import { ZERO } from 'common/constants';
import { Container, Table } from 'components';
import { fetchCoinsData } from 'services/coinDeskService';

const Home = () => {
  const [coinsData, setCoinsData] = React.useState<any>([]);

  const fetchingCoinsData = async () => {
    const data: any = await fetchCoinsData();
    const tableData = {
      tableData: data.bpi,
      tableDetail: data.time.updated,
      tableName: data.chartName,
    };
    setCoinsData(tableData);
  };

  React.useEffect(() => {
    fetchingCoinsData();
  }, []);

  return (
    <div>
      <Container>
        <p>
          This is a react-typescript starter kit. To test routing click{' '}
          <Link to="/about">here</Link> to navigate to the about page
        </p>
      </Container>

      {coinsData.length !== ZERO && (
        <Container>
          <Table
            data={coinsData.tableData}
            tableDetail={coinsData.tableDetail}
            tableName={coinsData.tableName}
          />
        </Container>
      )}
    </div>
  );
};

export default Home;
