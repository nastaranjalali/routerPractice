import {Link} from "react-router-dom";

function ContactUs() {
    return (
        <div className={["wrapper", "contactUs"].join(' ')}>
            <div>
                contact us
            </div>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default ContactUs;
