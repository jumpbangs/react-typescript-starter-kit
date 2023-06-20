import React from 'react';

import { ZERO } from 'src/common/constants';
import { capitalize } from 'src/utils/strings';

interface TableProps {
  tableName?: string;
  tableDetail?: string;
  data?: any;
}

const Table = ({ tableName, tableDetail, data }: TableProps) => {
  const dataKeys = Object.keys(data);
  const dataHeaders = Object.keys(data[dataKeys[ZERO]]);

  const tableData = Object.values(data).map((value: any) => {
    return dataHeaders.map((key) => {
      return value[key];
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <>
            {dataHeaders.map((headers, index) => {
              return <th key={index}>{capitalize(headers)}</th>;
            })}
          </>
        </tr>
      </thead>
      <tbody>
        <>
          <tr>
            {tableData.map((value, index) => {
              return <td key={index}>{value}</td>;
            })}
          </tr>
        </>
      </tbody>
      <caption>
        {tableName} - {tableDetail}
      </caption>
    </table>
  );
};

export default Table;
