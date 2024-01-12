import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Rating from "react-rating-stars-component";

const StuFeedback = () => {
  const [courseRating, setCourseRating] = useState(0);
  const [languageRating, setLanguageRating] = useState(0);
  const [instituteRating, setInstituteRating] = useState(0);
  const [feesRating, setFeesRating] = useState(0);
  const [comment, setComment] = useState("");
  const [studentData, setStudentData] = useState({
    name: "",
    id: "",
    course: "",
  });

  const handleCourseRatingChange = (newRating) => {
    setCourseRating(newRating);
  };

  const handleLanguageRatingChange = (newRating) => {
    setLanguageRating(newRating);
  };

  const handleInstituteRatingChange = (newRating) => {
    setInstituteRating(newRating);
  };

  const handleFeesRatingChange = (newRating) => {
    setFeesRating(newRating);
  };

  const handleStudentInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", {
      courseRating,
      languageRating,
      instituteRating,
      feesRating,
      comment,
      ...studentData,
    });
    setCourseRating(0);
    setLanguageRating(0);
    setInstituteRating(0);
    setFeesRating(0);
    setComment("");
    setStudentData({
      name: "",
      id: "",
      course: "",
    });
  };

  return (
    <Container fluid className="UserFeedback">
      <Form onSubmit={handleSubmit}>
        <Row>
        <Form.Group controlId="studentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleStudentInputChange}
                required
                style={{ width: "600px" }}
              />
            </Form.Group>
            <Form.Group controlId="studentId">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={studentData.id}
                onChange={handleStudentInputChange}
                required
                style={{ width: "600px" }}
              />
            </Form.Group>
            <Form.Group controlId="studentCourse">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                name="course"
                value={studentData.course}
                onChange={handleStudentInputChange}
                required
                style={{ width: "600px" }}
              />
            </Form.Group>
        </Row>
        <Row>
          {/* Student Information Form */}
          <Col md={6}>
          <Form.Group controlId="courseRating">
              <Form.Label>Rate the course</Form.Label>
              <Rating
                count={5}
                onChange={handleCourseRatingChange}
                size={40}
                activeColor="#ffd700"
              />
            </Form.Group>
            <Form.Group controlId="languageRating">
              <Form.Label>Rate the Teacher Language</Form.Label>
              <Rating
                count={5}
                onChange={handleLanguageRatingChange}
                size={40}
                activeColor="#ffd700"
              />
            </Form.Group>
          </Col>
          
          {/* Existing Rating Components */}
          <Col md={6}>
          <Form.Group controlId="instituteRating">
              <Form.Label>Rate the institute</Form.Label>
              <Rating
                count={5}
                onChange={handleInstituteRatingChange}
                size={40}
                activeColor="#ffd700"
              />
            </Form.Group>
            <Form.Group controlId="feesRating">
              <Form.Label>Rate the Fees</Form.Label>
              <Rating
                count={5}
                onChange={handleFeesRatingChange}
                size={40}
                activeColor="#ffd700"
              />
            </Form.Group>
          </Col>
       </Row>
        <Row>
          <Form.Group controlId="comment">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              style={{ width: "600px" }}
            />
          </Form.Group>
          <Button variant="primary" className="btn btn-warning" type="submit">
            Submit Feedback
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default StuFeedback;
