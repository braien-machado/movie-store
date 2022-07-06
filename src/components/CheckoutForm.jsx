import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

const INPUT_BASIC_STYLE = `border-2 bg-gray-100 border-gray-300 p-3 rounded
focus:outline-gray-500`;

export default function CheckoutForm(props) {
  const { values, updateValue } = props;
  const {
    name,
    cpf,
    cel,
    email,
    cep,
    address,
    city,
    state,
  } = values;

  const handleChange = (key, value) => updateValue({ ...values, [key]: value });

  return (
    <form className="flex flex-col gap-8 w-[90%] max-w-[492px] md:w-[300px] xl:w-[492px]">
      <input
        className={ `${INPUT_BASIC_STYLE}` }
        type="text"
        placeholder="Nome Completo"
        value={ name }
        onChange={ ({ target: { value } }) => handleChange('name', value) }
      />
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <InputMask
          mask="999.999.999-99"
          className={ `${INPUT_BASIC_STYLE}` }
          type="text"
          placeholder="CPF"
          value={ cpf }
          onChange={ ({ target: { value } }) => handleChange('cpf', value) }
        />
        <InputMask
          mask="(99) 99999-9999"
          className={ `${INPUT_BASIC_STYLE}` }
          type="text"
          placeholder="Celular"
          value={ cel }
          onChange={ ({ target: { value } }) => handleChange('cel', value) }
        />
      </div>
      <input
        className={ `${INPUT_BASIC_STYLE}` }
        type="email"
        placeholder="E-mail"
        value={ email }
        onChange={ ({ target: { value } }) => handleChange('email', value) }
      />
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <InputMask
          mask="99999-999"
          className={ `${INPUT_BASIC_STYLE} md:w-full xl:max-w-[33%]` }
          type="text"
          placeholder="CEP"
          value={ cep }
          onChange={ ({ target: { value } }) => handleChange('cep', value) }
        />
        <input
          className={ `${INPUT_BASIC_STYLE} w-full` }
          type="text"
          placeholder="Endereço"
          value={ address }
          onChange={ ({ target: { value } }) => handleChange('address', value) }
        />
      </div>
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <input
          className={ `${INPUT_BASIC_STYLE}` }
          type="text"
          placeholder="Cidade"
          value={ city }
          onChange={ ({ target: { value } }) => handleChange('city', value) }
        />
        <input
          className={ `${INPUT_BASIC_STYLE}` }
          type="text"
          placeholder="Estado"
          value={ state }
          onChange={ ({ target: { value } }) => handleChange('state', value) }
        />
      </div>
    </form>
  );
}

CheckoutForm.propTypes = {
  updateValue: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    cel: PropTypes.string,
    email: PropTypes.string,
    cep: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};
