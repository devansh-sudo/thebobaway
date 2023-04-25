import "./ProductGrid.css"

export const ProductGrid=()=>{
    return(
    <div style={{backgroundImage:`url("happy-background.png")`}}>
    <h1 className="new-section-heading" >OUR HAPPY <span style={{color:"#fe611d"}}>CUSTOMERS</span></h1>    
    <div class="product-container">
    
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-1.png" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-2.png" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-3.png" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-4.png" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-5.png" alt="img" /></div>
</div>
</div>
    )
}