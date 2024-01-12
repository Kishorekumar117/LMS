package com.grade.gradestart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grade.gradestart.model.AttendenceModel;
import com.grade.gradestart.model.MarksModel;
import com.grade.gradestart.service.YourService;

@RestController
@RequestMapping("/show")
@CrossOrigin(value="http://localhost:3000")
public class StudentMarksController {
	
	@Autowired
	private final YourService YourService;

	public StudentMarksController(YourService yourService) {
		this.YourService = yourService;
	}
	
	
	@GetMapping("/grade")
	public ResponseEntity<List<Object[]>> getStudentMarksDetails(){
		List<Object[]> gradeDetials=YourService.fetchStudentMarksDetails();
		return ResponseEntity.ok().body(gradeDetials);
	}
	
	@GetMapping("/singlestudent")
	public ResponseEntity<List<Object[]>> getsingleStudentMarksDetails(){
		List<Object[]> studentDetials=YourService.singleStudentMarksDetails();
		return ResponseEntity.ok().body(studentDetials);
	}
	
//	@GetMapping("/see")
//	public List<MarksModel>sh(){
//		return YourService.sho();
//	}
	
	
}
