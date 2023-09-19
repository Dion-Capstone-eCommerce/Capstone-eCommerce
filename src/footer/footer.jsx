import React from "react";
import './footer.css';

function Footer() {
    return (
    <footer className="footer">
<div>
    <p>Contact us at:</p>
    <p>(407) 123-4567</p>
    <p>sales@cystalclearsounds.com</p>
    <p>Business Hours:</p>
    <p>
    Monday<span className="spacer1">6am-9pm EST</span>
    </p>

    <p>
        Tuesday<span className="spacer2">6am-9pm EST</span>
        </p>

    <p>
        Wednesday<span className="spacer3">6am-9pm EST</span>
        </p>

    <p>
        Thurday<span className="spacer4">6am-9pm EST</span>
        </p>

    <p>
        Friday<span className="spacer5">6am-4pm EST</span>
        </p>

    <p>
        Saturday<span className="spacer6">8am-12pm EST</span>
        </p>

    <p>
        Sunday<span className="spacer7">CLOSED</span>
        </p>


    &copy; 2023 Crystal Clear Sounds Inc. All rights reserved.
</div>
</footer>
);
}

export default Footer;