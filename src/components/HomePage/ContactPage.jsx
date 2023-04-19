import "./ContactPage.css"
import React ,{useState} from "react";
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
        <div className="contact-container container-fluid " style={{backgroundColor:'#fdb777'}} >
            <div className="contact-container-part-a">
                <h2>Request a free franchise consultation</h2>
                <button className="reqst-btn" style={{fontSize:16,textAlign:'center'}}>Read more</button>

                <div className="img44-div">
                <img className="img44" src="img44.png" />
                </div>
             
            </div>
            <div className="contact-container-part-b">
                <h2 style={{textAlign:"center",fontSize:"26px"}}>Get a franchise</h2>
                <br />
                <br />
                <form method="POST">
              <div className='contact_form'>

                <label className=' form-Text h3'>Name</label >
                <input type="text" className="form-inputs" placeholder='Name'  id="" 
                name="name"  
                value={userData.name}
                onChange={postUserData} 
                />
                <label className='formText h3'>Email</label >
                <input className="form-inputs"   id="" name="email" type="email" placeholder='Email' value={userData.email}
                  onChange={postUserData} />

                <label className='formText h3' >Phone number</label >
                <input className="form-inputs"   id="" name="phoneNo" type="number" placeholder='Mob.No' value={userData.phoneNo}
                  onChange={postUserData} />

                <label className='formText h3' >City</label >
                <input className="form-inputs"   id="" name="city" type="text" placeholder='College Name' value={userData.city}
                  onChange={postUserData} />
                <div className='submitbtn_div'>
                  <button onClick={submitData} type="submit"className="submit_btn">Submit</button>
                </div>
              </div>
              </form>
                {/* <form >
                    <h3 className="formText">Name</h3>
                    <input className="form-inputs"/>
                    <br />
                    <br />
                    <h3 className="formText">Email</h3>
                    <input />
                    <br />
                    <br />
                    <h3 className="formText">Phone No.</h3>
                    <input />
                    <br />
                    <br />
                    <h3 className="formText">City</h3>
                    <input />
                    <br />
                    <br />
                    <button className="form-submit" type="submit">SUBMIT</button>
                </form> */}
            </div>
        </div>
    )
}