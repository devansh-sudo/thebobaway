import instaImage from '../../assets/Images/InstaImage.png';

export const InstagramPage=()=>{



    return (<div style={{textAlign:"center",backgroundColor:"white",fontSize:"30px",padding:"10px"}}>
 <div><h1>Follw us on Instagram</h1></div>

 <div><img src={instaImage} alt="insagram_Image"/></div>       
    <button style={{padding:"5px",backgroundColor:"gray",border:"none",width:"18%",height:"40px",borderRadius:"10px",color:"white",fontWeight:"bold"}}>Follow</button>
    </div>)
}