package com.grade.gradestart.model;

import java.util.Date;

import jakarta.persistence.*;


@Entity
@Table(name="std_attendance_with_id")
public class AttendenceModel {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int attendanceId;
	
	@Column(name = "Std_id")
    private int stdId;
	
	@Column(name = "Std_name")
    private String stdName;
	
	@Column(name = "Date")
	@Temporal(TemporalType.DATE)
    private Date date;
	
	@Column(name = "Attendance")
    private String attendance;

    // Constructors
    public AttendenceModel() {
    }

    public AttendenceModel(int attendanceId, int stdId, String stdName, Date date, String attendance) {
        this.attendanceId = attendanceId;
        this.stdId = stdId;
        this.stdName = stdName;
        this.date = date;
        this.attendance = attendance;
    }

    // Getters and Setters
    public int getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(int attendanceId) {
        this.attendanceId = attendanceId;
    }

    public int getStdId() {
        return stdId;
    }

    public void setStdId(int stdId) {
        this.stdId = stdId;
    }

    public String getStdName() {
        return stdName;
    }

    public void setStdName(String stdName) {
        this.stdName = stdName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAttendance() {
        return attendance;
    }

    public void setAttendance(String attendance) {
        this.attendance = attendance;
    }

    // toString method
    @Override
    public String toString() {
        return "AttendenceModel{" +
                "attendanceId=" + attendanceId +
                ", stdId=" + stdId +
                ", stdName='" + stdName + '\'' +
                ", date=" + date +
                ", attendance='" + attendance + '\'' +
                '}';
    }
}
