import { AboutUs } from "../AboutUsPage/AboutUs"
import { ContactUsPage } from "../ContactUsPage/ContactUsPage"
import { FranchsePage } from "../Franchise/FranchisePage"
import { HomePage } from "../HomePage/HomePage"
import { Route,Routes } from "react-router-dom"
import { OutletPage } from "../OutletsPage/OutletPage"
import { SpecialPage } from "../SpecialPage/SpecialPage"
import Menu from "../MenuPage/MenuPage"
import { HappyCustomerPage } from "../HappyCustomerPage/HappyCustomerPage"

export const AllRoutes=()=>{



    return (<div>
        <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/franchise" element={<FranchsePage />} />
<Route path="/contact" element={<ContactUsPage />} />
<Route path="/outlet" element={<OutletPage />} />
<Route path="/special" element={<SpecialPage />} />
<Route path="/menu" element={<Menu />} />
<Route path="/happycustomer" element={<HappyCustomerPage />} />

<Route path="*" element={<HomePage />} />
</Routes>
    </div>)
}