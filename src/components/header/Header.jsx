import "./header.css";
export default function Header () {
    return ( <header className="header">
        <div className="header-top">
            <div className="header-top-menu">
            <i className="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
                0750-793-2888
            </div>
            <div className="header-top-text">
                welcome to online Book store
            </div>
            <div className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </div>
        </div>

    </header> );

    // export default Header;
}

