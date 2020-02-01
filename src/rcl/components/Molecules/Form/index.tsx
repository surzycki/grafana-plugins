import React from 'react';
import Input from 'rcl/components/Atoms/Input';
import Button from 'rcl/components/Atoms/Button';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <Input />
        <br />
        <Button />
      </div>
    );
  }
}

export default Form;
