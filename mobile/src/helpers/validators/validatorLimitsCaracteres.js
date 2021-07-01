export default EmailValidade = (data, limit) => {
  let error = false;
  const dataArray = data.split("");

  if (dataArray.length < limit) {
    error = true;
    return error;
  }
  return error;
};
