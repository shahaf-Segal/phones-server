const getSortMethod = (sortNumber) => {
  switch (sortNumber) {
    //sort by price- ascending
    case "0":
      return (a, b) => a.price - b.price;
    //sort by price- decending
    case "1":
      return (a, b) => b.price - a.price;
    //sort by releaseYear- ascending
    case "2":
      return (a, b) => a.releaseYear - b.releaseYear;
    //sort by releaseYear- decending
    case "3":
      return (a, b) => b.releaseYear - a.releaseYear;
    default:
      return null;
  }
};

module.exports = getSortMethod;
