import { HappyCustomerPage } from "./HappCustomerSlide"
import "./ProductGrid.css"

export const ProductGrid=()=>{
    return(
    <div style={{backgroundImage:`url("happy-background.png")`,paddingBottom:"10px"}}>
        <h1 className="happy-heading" >OUR HAPPY <span style={{ color: "#fe611d" }}>CUSTOMERS</span></h1>
    {/* <h1 className="insta-heading" >OUR HAPPY  <span style={{ color: "#fe611d" }}>CUSTOMERS</span></h1>     */}
    <div class="product-container">
    
    <div><img className="happy-img-fluid"  src="happy-1.png" alt="img" /></div>
    <div><img className="happy-img-fluid"  src="happy-2.png" alt="img" /></div>
    <div><img className="happy-img-fluid"  src="happy-3.png" alt="img" /></div>
    <div><img className="happy-img-fluid"  src="happy-4.png" alt="img" /></div>
    <div><img className="happy-img-fluid"  src="happy-5.png" alt="img" /></div>
</div>

<div className="happy-customer-div-container">
    <HappyCustomerPage />
</div>
</div>
    )
}