import {Link} from "react-router-dom";

function Home() {
    const hasPanelAccess = !!localStorage.token
    return (
        <div className={["wrapper", "home"].join(' ')}>

            {
                hasPanelAccess ? (
                    <Link to={"/profile"}>
                        <button>Profile</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )
            }

            <Link to="/home/contact-us">
                <button>Contact us</button>
            </Link>


        </div>
    );
}

export default Home;
