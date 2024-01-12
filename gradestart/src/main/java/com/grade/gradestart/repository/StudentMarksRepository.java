package com.grade.gradestart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.grade.gradestart.model.AttendenceModel;
import com.grade.gradestart.model.MarksModel;

@Repository
public interface StudentMarksRepository extends JpaRepository<MarksModel, Long> {
	
	@Query("SELECT m.stdId, a.stdName, m.examName, MAX(m.resultScore), " +
		       "(SELECT (COUNT(CASE WHEN att.attendance = 'P' THEN 1 END)) " +
		       " FROM AttendenceModel att WHERE att.stdId = m.stdId) AS presentDays, " +
		       "(SELECT COUNT(*) FROM AttendenceModel att WHERE att.stdId = m.stdId) AS totalDays, " +
		       "(SELECT (COUNT(CASE WHEN att.attendance = 'P' THEN 1 END) / COUNT(*)) * 100 " +
		       " FROM AttendenceModel att WHERE att.stdId = m.stdId) AS percentage, " +
		       "CASE WHEN (SELECT (COUNT(CASE WHEN att.attendance = 'P' THEN 1 END) / COUNT(*)) * 100 " +
		       "           FROM AttendenceModel att WHERE att.stdId = m.stdId) > 60 THEN 'Pass' " +
		       "     ELSE 'Fail' END AS result " +
		       "FROM MarksModel m " +
		       "INNER JOIN AttendenceModel a ON m.stdId = a.stdId " +
		       "GROUP BY m.stdId, a.stdName, m.examName")
		List<Object[]> fetchStudentMarksDetails();
	
	
	
	@Query("SELECT m.stdId FROM MarksModel m ")
	List<Object[]> StudentSingleMarksDetails();
	 
	
}

