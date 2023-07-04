import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavbarPanel"
import {Provider} from 'react-redux'
import store from "./Store/store"

const Rootlayout=()=>{
    return(
        <>
        <Provider store={store}>
        <NavbarPanel/>
        {/* <div>Navigation</div> */}
        <main>
            <Outlet/>
        </main>
        </Provider>
        </>
        
    )
}
export default Rootlayout