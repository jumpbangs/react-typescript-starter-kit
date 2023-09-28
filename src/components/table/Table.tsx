import { LAST_ELEMENT_INDEX, ZERO } from 'common/constants';
import { capitalize, convertHTMLToCharacter } from 'utils/strings';

interface TableProps {
  tableName?: string;
  tableDetail?: string;
  data?: any;
}

const Table = ({ data, tableDetail, tableName }: TableProps) => {
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
