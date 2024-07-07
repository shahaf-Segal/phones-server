const phonePerPage = 10;

const getPagedArray = (phoneArray, pageNumber) => {
  const currentPage = pageNumber || 1;
  const startIndex = (pageNumber - 1) * phonePerPage;
  const endIndex = startIndex + phonePerPage;
  const filteredPhones = phoneArray.slice(startIndex, endIndex);
  const correctEndIndex = startIndex + filteredPhones.length;

  const total = Math.ceil(phoneArray.length / phonePerPage);
  return {
    phones: filteredPhones,
    pages: {
      total,
      current: currentPage,
      from: startIndex + 1,
      to: correctEndIndex,
    },
  };
};

module.exports = { getPagedArray };
