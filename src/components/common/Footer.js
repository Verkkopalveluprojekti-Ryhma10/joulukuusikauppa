import '../../styles/Footer.css'
import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p><strong>Osoite:</strong> joulukatu 24 a 24</p>
                <p><strong>Sähköposti:</strong> info@esimerkki.fi</p>
                <p><strong>Puhelin:</strong> 0123-4567589</p>
                <p><strong>Y-tunnus</strong> 1234-5678</p>
            </div>
        </footer>
    );
}

export default Footer;