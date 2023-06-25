const dataProcessor = (data) => {
  const price = [];
  for (const key in data.rates) {
    price.push([key, data.rates[key]]);
  }

  let usdPrice = 1;
  let usdIndex = 4;
  if (price[usdIndex]) {
    usdPrice = 1 / price[usdIndex][1];
  }
  let displayPrice = price.map((data) => {
    return [
      data[0],
      (1 / data[1]).toFixed(2),
      (1 / data[1] / usdPrice).toFixed(2),
    ];
  });

  return displayPrice;
};

export default dataProcessor;
