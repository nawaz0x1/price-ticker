import dataSorter from '../../utils/dataSorter.util';

const Table = ({ price, setPrice, sortType, setSortType }) => {
  const flag = {
    AED: '🇦🇪',
    CAD: '🇨🇦',
    EUR: '🇪🇺',
    SAR: '🇸🇦',
    USD: '🇺🇸',
    XAU: '🌟',
  };

  return (
    <div className="App place-content-center mx-auto grid my-auto">
      <table className="table-auto rounded-xl m-5 p-5 shadow-xl bg-slate-100 place-content-center">
        <tr className=" px-8 py-4">
          <th
            className=" text-left px-8 py-4"
            onClick={() => {
              dataSorter(0, price, setPrice, sortType, setSortType);
            }}
          >
            Symbol {sortType[0] == 0 && (sortType[1] != true ? '⬆' : '⬇')}
          </th>
          <th
            className=" text-left px-8 py-4"
            onClick={() => {
              dataSorter(1, price, setPrice, sortType, setSortType);
            }}
          >
            Price (BDT) {sortType[0] == 1 && (sortType[1] != true ? '⬆' : '⬇')}
          </th>
          <th
            className=" text-left px-8 py-4"
            onClick={() => {
              dataSorter(2, price, setPrice, sortType, setSortType);
            }}
          >
            Price (USD) {sortType[0] == 2 && (sortType[1] != true ? '⬆' : '⬇')}
          </th>
        </tr>

        {price.map((data) => {
          return (
            <tr key={data[0]}>
              <td className="m-2">
                <div className="m-3">
                  {flag[data[0]]} {data[0]}
                </div>
              </td>
              <td className="m-2">
                <div className="m-3">
                  {flag[data[1]]} {data[1]}
                </div>
              </td>
              <td className="m-2">
                <div className="m-3">
                  {flag[data[2]]} {data[2]}
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
