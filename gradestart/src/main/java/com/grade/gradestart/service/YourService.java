package com.grade.gradestart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grade.gradestart.model.AttendenceModel;
import com.grade.gradestart.model.MarksModel;

import com.grade.gradestart.repository.StudentAttendenceRepositort;
import com.grade.gradestart.repository.StudentMarksRepository;

@Service
public class YourService {
	
	@Autowired
	private StudentAttendenceRepositort StudentAttendenceRepositort; 
	
	@Autowired
	private StudentMarksRepository StudentMarksRepository;
	public List<Object[]> fetchStudentMarksDetails(){
		return StudentMarksRepository.fetchStudentMarksDetails();
	}
	
//	public List<MarksModel> sho(){
//		return StudentMarksRepository.findAll();
//	}
	
	public List<Object[]> singleStudentMarksDetails(){
		return StudentMarksRepository.StudentSingleMarksDetails();
	}
	
	
	

	

}
