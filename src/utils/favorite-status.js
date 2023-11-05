const getStatus = (status) => {
  if (status === 0) {
    status = 1;
  } else {
    status = 0;
  }
  return status;
};

export {getStatus};


