export const registerParent = async (studentData,e) =>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/getStudents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullname,phonenumber,email,password })

      });
      studentData = await response.json();
      if(studentData){
        setStudentData(studentData);
      }else{
        console.log(`error: ${e}`)
      }
  }
catch{}}