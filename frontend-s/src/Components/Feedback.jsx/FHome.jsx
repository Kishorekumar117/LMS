
import React, { useState } from 'react';
import AddDataForm from './AddDataForm';
import DataDisplay from './DataDisplay'; 

const FHome = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleShowButtonClick = () => {
    setShowAddForm(false);
  };

  return (
    <div className='Fform'>
      <button onClick={handleAddButtonClick}>Add Data</button>
      <button onClick={handleShowButtonClick}>Show Data</button>

      {showAddForm && <AddDataForm />}
      {!showAddForm && <DataDisplay />}
    </div>
  );
};

export default FHome;
