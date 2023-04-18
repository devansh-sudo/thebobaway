import "./ContactPage.css"
export const ContactPage=()=>{


    return (
        <div className="contact-container">
            <div className="contact-container-part-a">
                <h1>Request a free franchise consultation</h1>
                <button>Read More</button>
            </div>
            <div className="contact-container-part-b">
                <h2 style={{textAlign:"center",fontSize:"32px"}}>Get a franchise</h2>
                <br />
                <br />
                <form>
                    <h3>Name</h3>
                    <input />
                    <br />
                    <br />
                    <h3>Email</h3>
                    <input />
                    <br />
                    <br />
                    <h3>Phone No.</h3>
                    <input />
                    <br />
                    <br />
                    <h3>City</h3>
                    <input />
                    <br />
                    <br />
                    <button className="form-submit" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}