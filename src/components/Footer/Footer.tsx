import './Footer.css';
import { footerNote } from '../../constants';

const Footer = () => {
    return (
        <div className='footer-container d-flex justify-content-center'>
            <span>&#169;</span>
            {footerNote}
            <span>{new Date().getFullYear()}</span>
        </div>
    );
}

export default Footer;