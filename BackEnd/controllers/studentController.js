const Student = require('../models/studentRole');


// Retrieve all students
exports.getAllStudents = async (req, res) => {
    try {
      // Fetch all students from the database
      const students = await Student.findAll();
  
      // Check if there are no students
      if (!students.length) {
        return res.status(404).json({
          message: 'No students found',
        });
      }
  
      // Return the list of students
      return res.status(200).json({
        message: 'Students retrieved successfully',
        students,
      });
    } catch (error) {
      // Handle any errors
      return res.status(500).json({
        message: `Error retrieving students: ${error.message}`,
      });
    }
  };
  