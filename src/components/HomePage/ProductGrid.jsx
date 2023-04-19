import "./ProductGrid.css"

export const ProductGrid=()=>{
    return(
    <div style={{backgroundColor:"#f1f1f1",textAlign:"center"}}>
    <h1 style={{textAlign:"center",fontSize:"50px"}}>Our Happy Customers</h1>    
    <div class="product-container">
    
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-1.jpg" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-2.jpg" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-3.jpg" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-4.jpg" alt="img" /></div>
    <div><img className="img-fluid" height={"100%"} width={"100%"} src="happy-5.jpg" alt="img" /></div>
</div>
</div>
    )
}