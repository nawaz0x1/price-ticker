import { useEffect, useState } from 'react';
import Table from './Components/Table/table.component';
import dataProcessor from './utils/dataProcessor.util';

function App() {
  // states

  const [price, setPrice] = useState([]);
  const [sortType, setSortType] = useState([0, true]);

  // fetching data and preparing

  useEffect(() => {
    fetch(
      `https://api.metalpriceapi.com/v1/latest?api_key=${
        import.meta.env.VITE_API_KEY
      }&base=BDT&currencies=USD,EUR,XAU,AED,SAR,CAD`
    )
      .then((response) => response.json())
      .then((data) => {
        const displayPrice = dataProcessor(data);
        setPrice(displayPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Table
        price={price}
        setPrice={setPrice}
        sortType={sortType}
        setSortType={setSortType}
      />
    </>
  );
}

export default App;
