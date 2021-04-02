import React, {useState} from 'react';

function Navbar(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
            >
            <div className="container">
            <div className="navbar-brand">
                <a
                    role="button"
                    className={`navbar-burger burger ${isOpen && "is-active"}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setOpen(!isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
                {/* ... */}
            </div>
            </nav>
  );


            
        </div>
    );
}

export default Navbar;