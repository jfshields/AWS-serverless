// AddressSection.js
import React from 'react';

class AddressSection extends React.Component {
  render() {
    return (
        <label>
          address_city:
          <input type="text" name="address_city" />
        </label>
    );
  }
};

export default AddressSection;