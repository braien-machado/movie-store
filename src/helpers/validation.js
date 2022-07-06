export const isEmpty = (value) => !value;

export const isCepValid = (value) => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(value);
};

export const isCelValid = (value) => {
  const pattern = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
  return pattern.test(value);
};

export const isCpfValid = (value) => {
  const pattern = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
  return pattern.test(value);
};

export const isEmailValid = (value) => {
  const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(value);
};

const validateFields = (
  {
    name,
    cpf,
    cel,
    email,
    cep,
    address,
    city,
    state,
  },
) => (
  !isEmpty(name)
  && !isEmpty(city)
  && !isEmpty(state)
  && !isEmpty(address)
  && isCelValid(cel)
  && isCpfValid(cpf)
  && isCepValid(cep)
  && isEmailValid(email)
);

export default validateFields;
