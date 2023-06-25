const dataSorter = (index, price, setPrice, sortType, setSortType) => {
  let ascending = sortType[1];
  let newPrice = [...price];
  switch (index) {
    case 0:
      {
        newPrice = newPrice.sort((a, b) => {
          if (!ascending) [a, b] = [b, a];
          return a[index].toUpperCase().localeCompare(b[index].toUpperCase());
        });
      }
      break;
    default: {
      newPrice = newPrice.sort((a, b) => {
        if (!ascending) [a, b] = [b, a];
        return a[index] - b[index];
      });
    }
  }
  setPrice(newPrice);
  setSortType([index, !ascending]);
};

export default dataSorter;
