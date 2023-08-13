import { Outlet } from "react-router-dom";
import GenreNavigation from "../components/GenreNavigation";

function GenreRootLayout() {
    return(
        <>
         <GenreNavigation />
         <main>
            <Outlet />
         </main>
        </>
    );
};


export default GenreRootLayout;