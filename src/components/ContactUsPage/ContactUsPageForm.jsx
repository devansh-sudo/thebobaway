import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ContactUsPageForm.css"
import swal from 'sweetalert'; 
import { useState } from 'react';
export const ContactUsPageForm=()=> {
  

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });




  let name, value;
  const postUserData = (event) => { 
    console.log("hello")
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };


const submitData = async (event) => {
  
  event.preventDefault();
  console.log("userData",userData)
  const { name, email,  message } = userData;

    if (name && email  && message ) {
      const res = fetch(
        "https://thebobaway-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
         
          body: JSON.stringify({
            name,
            email,
            
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          message: ""
        });
        swal({  
          title: "Success!",  
          text: "Data successfully stored, we'll get back to you soon!",  
          icon: "success",  
          button: "Okay !",  
        });  
      } else {
        swal({  
          title: " Oops!",  
          text: " Please fill out all the required information!",  
          icon: "error",  
          button: "Back !",  
        });  
      }
    } else {
      swal({  
        title: " Oops!",  
        text: " Please fill out all the required information!",  
        icon: "error",  
        button: "Back !",  
      }); 
    }
  };


  
  return (
    <Form className='form-container'>
      
      <Form.Group className="mb-5" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control className="coname" size="lg" type="text" name="name"  value={userData.name} onChange={postUserData} />
      </Form.Group>



      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className="coemail" size='lg' type="email" name="email" value={userData.email} onChange={postUserData} />
      </Form.Group>

      
      <Form.Group className="mb-5" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" size='lg' max="5" name="phone" className="cophone" value={userData.phone} onChange={postUserData} />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control className="comessage" name="message" size='lg' type="text" value={userData.message} onChange={postUserData} />
      </Form.Group> 

      <Button variant="primary" onClick={submitData} className='conbtn' type="submit">
        SUBMIT
      </Button>
    </Form>
  );
}

