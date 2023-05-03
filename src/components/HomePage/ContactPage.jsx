import "./ContactPage.css"
import React ,{useState} from "react";
import {Container,Row,Col} from "react-bootstrap"
import swal from 'sweetalert'; 
export const ContactPage=()=>{

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        city: ""
      });
    
      let name, value;
      const postUserData = (event) => { 
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, phoneNo , city } = userData;
    
        if (name && email && phoneNo && city ) {
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
                phoneNo,
                city,
              }),
            }
          );
    
          if (res) {
            setUserData({
              name: "",
              email: "",
              phoneNo: "",
              city: ""
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
        <div className="contact-container container-fluid " id="contact" >
            <Container className="contact-container-part-a g-0">
            {/* <Row className="row flex-column-reverse flex-md-row"> */}
            <Row>
                <Col className="left_col">
                <div className="heading_div">
                <p className="reqst_heading">Request A Free Franchise Consultation</p>
                <button className="readmore_btn" >Read more</button>
                </div>

                <div className="img44_div">
                <img className="img44 img-fluid" src="bobaformimg.png" />
                </div>
                </Col>
            
               
             
            
            {/* contact-form */}
            <Col className="right_col">  
            <form method="POST">
              <div className='contact_form'>
              <h2 className="form_heading">Get A Franchise</h2>
                <label className='form_lables'>Name</label >
                <input type="text" className="form_inputs" placeholder='Name'  id="" 
                name="name"  
                value={userData.name}
                onChange={postUserData} 
                />
                <label className='form_lables' >Email</label >
                <input className="form_inputs"   id="" name="email" type="email" placeholder='Email' value={userData.email}
                  onChange={postUserData} />

                <label className='form_lables' >Phone number</label >
                <input className="form_inputs"   id="" name="phoneNo" type="number"  placeholder='Mob.No' value={userData.phoneNo}
                  onChange={postUserData} />

                <label className='form_lables' >City</label >
                <input className="form_inputs"   id="" name="city" type="text" placeholder='City Name' value={userData.city}
                  onChange={postUserData} />
                <div className='submitbtn_div'>
                  <button onClick={submitData} type="submit"className="submit_btn">Submit</button>
                </div>
               </div>
              </form>
             </Col>
              </Row>
              </Container>
        </div>
    )
}