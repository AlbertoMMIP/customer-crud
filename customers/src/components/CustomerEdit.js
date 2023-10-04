import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, age, dni }) => {
  return (
    <div>
      <div className="customer-list-item">
        <h2>Edición del cliente</h2>
        <h3>Nombre: {name} / DNI:  {dni} / Edad {age}</h3>
      </div>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
}

export default CustomerEdit;
