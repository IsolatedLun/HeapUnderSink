import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { INF_User } from "../../features/types";
import { useAuth } from "../../hooks/useAuth";
import { useGetUserQuery } from "../../services/userService";
import MeHeader from "./MeHeader";
import MeSideNavbar from "./MeSideNavbar";
import MeMain from "./Pages/MeMain";
import MeQuestions from "./Pages/MeQuestions";

const Me = () => {
    const { id } = useParams();
    const [loggedUser, isLogged] = useAuth();
    const [user, setUser] = useState<INF_User>();
    const { data, isSuccess } = useGetUserQuery(Number(id));

    useEffect(() => {
        if(isLogged && loggedUser.id === Number(id))
            setUser(loggedUser);
        else {
            if(isSuccess)
                setUser(data);
        }
    }, [isSuccess, id])

    if(user)
        return (
            <div className="[ me ]">
                <MeHeader { ...user }  />

                <section data-reset-grid-colums-mobile aria-label="User section" 
                    className="[ me-grid ] [ grid-05fr-2fr ]">
                    <MeSideNavbar />

                    <Routes>
                        <Route path="" element={<MeMain user={user} />} />
                        <Route path="/questions" element={<MeQuestions user={user} />} />
                    </Routes>
                </section>
            </div>
        )
    else
        return <></>;
}

export default Me;