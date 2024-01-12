import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/data');
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/user/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Data deleted successfully');
        fetchData(); 
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='data-display-container'>
      <h2>Our Students Feedbacks!!!</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course name</th>
              <th>Date</th>
              <th>FB1</th>
              <th>FB2</th>
              <th>FB3</th>
              <th>FB4</th>
              <th>FB5</th>
              <th>FB6</th>
              <th>FB7</th>
              <th>FB8</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.student_id}>
                <td>{item.student_Name}</td>
                <td>{item.course_Name}</td>
                <td>{item.date}</td>
                <td>{item.fb1}</td>
                <td>{item.fb2}</td>
                <td>{item.fb3}</td>
                <td>{item.fb4}</td>
                <td>{item.fb5}</td>
                <td>{item.fb6}</td>
                <td>{item.fb7}</td>
                <td>{item.fb8}</td>
                <td>{item.comments}</td>
                <td>
                  <button onClick={() => handleDelete(item.student_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;
