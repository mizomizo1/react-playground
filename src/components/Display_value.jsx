import React from 'react';

const DisplayValue =() => {
    const [value, setValue] = React.useState("default");
    const handleChange =(e) => {
        setValue(e.target.value);
    };
  return (
    <div>
        <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        />
        <p>入力値: {value}</p>z
    </div>
  );
}

export default DisplayValue;