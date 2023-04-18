import { HomePage } from "../HomePage/HomePage"
import { Route,Routes } from "react-router-dom"
export const AllRoutes=()=>{



    return (<div>
        <Routes>
<Route path="/" element={<HomePage />} />
<Route path="*" element={<HomePage />} />

        </Routes>
    </div>)
}