import { AboutUs } from "../AboutUsPage/AboutUs"
import { ContactUsPage } from "../ContactUsPage/ContactUsPage"
import { FranchsePage } from "../Franchise/FranchisePage"
import { HomePage } from "../HomePage/HomePage"
import { Route,Routes } from "react-router-dom"
export const AllRoutes=()=>{



    return (<div>
        <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/franchise" element={<FranchsePage />} />
<Route path="/contact" element={<ContactUsPage />} />
<Route path="*" element={<HomePage />} />
</Routes>
    </div>)
}