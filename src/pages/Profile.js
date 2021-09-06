import {Link} from "react-router-dom";


function Profile() {

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    const gender = localStorage.getItem("gender") === "Female" ? 'Mrs' : 'mr';


    return (
        <div className={["wrapper", "profile"].join(' ')}>
            <div>
                {`hello ${gender} ${localStorage.getItem("name")}`}
            </div>
            <Link to="/login">
                <button onClick={handleLogout}>logout</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default Profile;
