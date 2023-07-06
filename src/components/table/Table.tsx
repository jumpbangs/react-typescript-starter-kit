import React from 'react';

import { LAST_ELEMENT_INDEX, ZERO } from 'src/common/constants';
import { capitalize, convertHTMLToCharacter } from 'src/utils/strings';

interface TableProps {
  tableName?: string;
  tableDetail?: string;
  data?: any;
}

const Table = ({ tableName, tableDetail, data }: TableProps) => {
  const dataKeys = Object.keys(data);
  const dataHeaders = Object.keys(data[dataKeys[ZERO]]).slice(ZERO, LAST_ELEMENT_INDEX);

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
          {Object.keys(data).map((currency) => (
            <tr key={currency}>
              <td>{data[currency].code}</td>
              <td>{convertHTMLToCharacter(data[currency].symbol)}</td>
              <td>{data[currency].rate}</td>
              <td>{data[currency].description}</td>
            </tr>
          ))}
        </>
      </tbody>
      <caption>
        {tableName} - {tableDetail}
      </caption>
    </table>
  );
};

export default Table;
