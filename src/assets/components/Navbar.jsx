import { Link } from "react-router-dom";

const Navbar = () => {
    const total = 2500;
    const token = false;

    return (
        <nav>
            <Link to="/" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🍕 Home</Link>
            {token ? (
                <>
                    <Link to="/profile" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔓 Profile</Link>
                    <button style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔒 Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔐 Login</Link>
                    <Link to="/register" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔐 Register</Link>
                </>
            )}
            <Link to="/cart" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🛒 Total: $2500</Link>
            <Link to="/Profile" style={{ backgroundColor: "grey", borderRadius: "10px" }}>Profile</Link>
        </nav>
    );
};

export default Navbar;
