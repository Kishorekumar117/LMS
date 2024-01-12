
import React, { useState } from 'react';

const AddDataForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [comments, setComments] = useState('');
  const [fb1, setFb1] = useState('');
  const [fb2, setFb2] = useState('');
  const [fb3, setFb3] = useState('');
  const [fb4, setFb4] = useState('');
  const [fb5, setFb5] = useState('');
  const [fb6, setFb6] = useState('');
  const [fb7, setFb7] = useState('');
  const [fb8, setFb8] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      student_Name: studentName,
      course_Name: courseName,
      fb1: fb1,
      fb2: fb2,
      fb3: fb3,
      fb4: fb4,
      fb5: fb5,
      fb6: fb6,
      fb7: fb7,
      fb8: fb8,
      date: date,
      comments: comments,


    };

    try {
      const response = await fetch('http://localhost:8080/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data added successfully');
      } else {
        console.error('Failed to add data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const inputStyle = {
    width: '700px', 
    height: '40px', 
    fontSize: '16px',
  };
  const labelStyle = {
    fontSize: '18px',
    color: '#003060',
    backgroundColor: 'white',
  };

  return (
    <div className='Fform'>
      <center>
       <h4 style={{color:"#003060"}}>Give Us your valuable Feedback!!!</h4>
       </center>
       <br/>
       <div className='formContainer'>
    <form onSubmit={handleSubmit} className='fform'>
      <label className="custom-label" style={labelStyle}>
        Student Name:
        <input
          type="text"
          value={studentName}
          className="custom-input"
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Course Name:
        <input
          type="text"
          value={courseName}
          className="custom-input"
          onChange={(e) => setCourseName(e.target.value)}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Date:
        <input
          type="date"
          value={date}
          className="custom-input"
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        How would you rate the clarity of the course content and explanations provided?
        <br />
        <input
          type="text"
          value={fb1}
          className="custom-input"
          onChange={(e) => setFb1(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Did the course meet your expectations in terms of depth and breadth of tech-related topics covered?
        <br />
        <input
          type="text"
          value={fb2}
          className="custom-input"
          onChange={(e) => setFb2(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        How effective was the instructor's communication and teaching style in delivering the course content?
        <br />
        <input
          type="text"
          value={fb3}
          className="custom-input"
          onChange={(e) => setFb3(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Were the practical exercises or hands-on activities beneficial in reinforcing the theoretical concepts?
        <br />
        <input
          type="text"
          value={fb4}
          className="custom-input"
          onChange={(e) => setFb4(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Did the pacing of the course feel appropriate, or did it feel too fast or slow at any point?
        <br />
        <input
          type="text"
          value={fb5}
          className="custom-input"
          onChange={(e) => setFb5(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Were the assessments or quizzes aligned with the course content and helpful in assessing your understanding?
        <br />
        <input
          type="text"
          value={fb6}
          className="custom-input"
          onChange={(e) => setFb6(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        How would you rate the accessibility and usability of the online platform or learning management system (LMS)?
        <br />
        <input
          type="text"
          value={fb7}
          className="custom-input"
          onChange={(e) => setFb7(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
        Overall, what aspects of the course did you find most valuable, and what areas do you think could be improved for
        future iterations?
        <br />
        <input
          type="text"
          value={fb8}
          className="custom-input"
          onChange={(e) => setFb8(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br /><br />
      <label className="custom-label" style={labelStyle}>
      Leave Your Comments:
      <br />
      <input
        type="text"
        value={comments}
        className="custom-input"
        onChange={(e) => setComments(e.target.value)}
        style={{
          width: '700px',
          height: '70px',
          fontSize: '16px'
        }}
      />
    </label>
      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button type="submit" class="btn btn-warning">Submit</button>
      </div>
      <br /><br />
    </form>
    </div>
    </div>
  );
};

export default AddDataForm;
