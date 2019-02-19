// eslint-disable-next-line
export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailValidation = email => {
  if (emailReg.test(email) === true) {
    return true;
  }
  return false;
};
