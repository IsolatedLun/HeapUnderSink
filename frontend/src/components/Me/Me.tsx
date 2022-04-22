import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INF_User } from "../../features/types";
import { useAuth } from "../../hooks/useAuth";
import CubeGraph from "../Graphs/CubeGraph/CubeGraph";
import MeAbout from "./MeAbout";
import MeHeader from "./MeHeader";
import MeSideNavbar from "./MeSideNavbar";

const Me = () => {
    const { id } = useParams();
    const [loggedUser, isLogged] = useAuth();
    const [user, setUser] = useState<INF_User>();

    useEffect(() => {
        if(isLogged)
            setUser(loggedUser);
        else {
            // ... fetch user
        }
    }, [])

    if(user)
        return (
            <div className="[ me ]">
                <MeHeader { ...user }  />

                <section data-reset-grid-colums-mobile aria-label="User section" className="[ me-grid ] [ grid-05fr-2fr ]">
                    <MeSideNavbar />

                    <div className="[ flex-between flex-align-start ]" data-flex-column-mobile>
                        <MeAbout />
                        <CubeGraph data={user.questions} dateKey={'created_at'} />
                    </div>
                </section>
            </div>
        )
    else
        return <></>;
}

export default Me;