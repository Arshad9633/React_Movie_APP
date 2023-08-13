import { Outlet } from "react-router-dom";
import CountryNavigation from "../components/CountryNavigation";

function CountryRootLayout() {
    return(
        <>
         <CountryNavigation />
         <main>
            <Outlet />
         </main>
        </>
    );
};


export default CountryRootLayout;