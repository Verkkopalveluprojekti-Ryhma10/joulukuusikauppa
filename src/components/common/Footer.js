import '../../styles/Footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p><strong>Osoite:</strong> joulukatu 24 a 24</p>
                <p><strong>Sähköposti:</strong> info@esimerkki.fi</p>
                <p><strong>Puhelin:</strong> 0123-4567589</p>
                <p><strong>Y-tunnus</strong> 1234-5678</p>
            </div>
            <div className="footer-content">
            <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} className='icons' size='2x'/>
            </Link>
            <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} className='icons' size='2x'/>
            </Link>
            <Link to="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} className='icons' size='2x'/>
            </Link>
            </div>
        </footer>
    );
}

export default Footer;