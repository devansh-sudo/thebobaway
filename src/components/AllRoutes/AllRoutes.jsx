import { AboutUs } from "../AboutUsPage/AboutUs"
import { HomePage } from "../HomePage/HomePage"
import { Route,Routes } from "react-router-dom"
export const AllRoutes=()=>{



    return (<div>
        <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutUs />} />
<Route path="*" element={<HomePage />} />
</Routes>
    </div>)
}