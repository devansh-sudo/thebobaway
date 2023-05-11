import { Button, Image } from "react-bootstrap"
import { ProductGrid } from "../HomePage/ProductGrid"

export const HappyCustomerPage=()=>{


return(<div>
    <div>
        {/* <div><p>HAPPY <span>CUSTOMERS</span></p></div>
        <div>
            <div><Button>All</Button></div>
            <div><Button>Photos</Button></div>
            <div><Button>Videos</Button></div>
        </div> */}
        <div>
        <ProductGrid />
        </div>
    </div>
</div>)

}