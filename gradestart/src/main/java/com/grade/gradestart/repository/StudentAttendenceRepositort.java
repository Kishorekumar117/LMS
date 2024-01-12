package com.grade.gradestart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.grade.gradestart.model.AttendenceModel;
import com.grade.gradestart.model.MarksModel;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StudentAttendenceRepositort extends JpaRepository<AttendenceModel, Long> {

//	@Query("")
//	List<Object[]> fetchStudentMarksDetails();
//	
//	@Query("")
//	List<Object[]> singleStudentMarksDetails();
}

