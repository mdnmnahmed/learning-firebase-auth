import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav>
                <div class="nav-wrapper #afb42b lime darken-2">
                    <a href="#" class="brand-logo">Firebase-Auth</a>
                    <ul id="nav-mobile" class="right">
                        <li><a class="waves-effect waves-light btn modal-trigger" href="#signupModal">Login</a></li>
                        <li><a href="collapsible.html">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;