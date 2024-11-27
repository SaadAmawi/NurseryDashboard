export const createStudent = async (studentData) =>{
    try {
      const response = await fetch('http://localhost:3000/createStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
            
      body: JSON.stringify({
        parentfullname: studentData.fullname,
        fullname: studentData.studentfullname,
        birth_date: studentData.birth_date,
        parent_email: studentData.parent_email,
        gender: studentData.gender,
        nationality: studentData.nationality,
        parent_phonenumber: studentData.parent_phonenumber
      }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  };
