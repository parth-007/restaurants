import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <span>&#169;</span>
            All rights reserved!
            <span>{new Date().getFullYear()}</span>
        </div>
    );
}

export default Footer;