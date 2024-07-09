const queryFilter = ({ model, os, brand }) => {
  const findQuery = {
    ...getSearchFilter("model", model),
    ...getSearchFilter("os", os),
    ...getSearchFilter("brand", brand),
  };
  return findQuery;
};

function getSearchFilter(propertyName, value) {
  const stringValue = revertStringReplacement(value);
  if (stringValue) {
    const queryObj = {};
    queryObj[propertyName] = { $regex: stringValue, $options: "i" };
    return queryObj;
  } else {
    return {};
  }
}

function revertStringReplacement(input) {
  try {
    return input.replace(/%[0-9A-F]{2}/g, function (match) {
      return String.fromCharCode(parseInt(match.slice(1), 16));
    });
  } catch {
    return "";
  }
}

module.exports = queryFilter;
