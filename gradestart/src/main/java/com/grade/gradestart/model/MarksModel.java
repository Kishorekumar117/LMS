package com.grade.gradestart.model;
import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name="marks")
public class MarksModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int exam_id;

    @Column(name = "Std_id")
    private int stdId;

    @Column(name = "exam_date")
    @Temporal(TemporalType.DATE)
    private Date exam_date;

    @Column(name = "result_score")
    private int resultScore;

    @Column(name = "result_status")
    private String resultStatus;

    @Column(name = "total_marks")
    private int totalMarks;

    @Column(name = "total_question")
    private int totalQuestion;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "exam_name")
    private String examName;

    // Constructors
    public MarksModel() {
        // Default constructor
    }

    public MarksModel(int stdId, Date exam_date, int resultScore, String resultStatus, int totalMarks, int totalQuestion, String userEmail, String examName) {
        this.stdId = stdId;
        this.exam_date = exam_date;
        this.resultScore = resultScore;
        this.resultStatus = resultStatus;
        this.totalMarks = totalMarks;
        this.totalQuestion = totalQuestion;
        this.userEmail = userEmail;
        this.examName = examName;
    }

    // Getters and Setters
    public int getExam_id() {
        return exam_id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }

    public int getStdId() {
        return stdId;
    }

    public void setStdId(int stdId) {
        this.stdId = stdId;
    }

    public Date getExam_date() {
        return exam_date;
    }

    public void setExam_date(Date exam_date) {
        this.exam_date = exam_date;
    }

    public int getResultScore() {
        return resultScore;
    }

    public void setResultScore(int resultScore) {
        this.resultScore = resultScore;
    }

    public String getResultStatus() {
        return resultStatus;
    }

    public void setResultStatus(String resultStatus) {
        this.resultStatus = resultStatus;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }

    public int getTotalQuestion() {
        return totalQuestion;
    }

    public void setTotalQuestion(int totalQuestion) {
        this.totalQuestion = totalQuestion;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    // toString method
    @Override
    public String toString() {
        return "MarksModel{" +
                "exam_id=" + exam_id +
                ", stdId=" + stdId +
                ", exam_date=" + exam_date +
                ", resultScore=" + resultScore +
                ", resultStatus='" + resultStatus + '\'' +
                ", totalMarks=" + totalMarks +
                ", totalQuestion=" + totalQuestion +
                ", userEmail='" + userEmail + '\'' +
                ", examName='" + examName + '\'' +
                '}';
    }
}

