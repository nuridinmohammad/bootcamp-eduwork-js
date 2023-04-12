export const fetchData = async (url, callback) => {
  const response = await fetch(url);
  return callback(response);
};
