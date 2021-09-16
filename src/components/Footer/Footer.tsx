import './Footer.css';
import { footerNote } from '../../constants';

const Footer = () => {
    return (
        <div className='footer-container'>
            <span>&#169;</span>
            {footerNote}
            <span>{new Date().getFullYear()}</span>
        </div>
    );
}

export default Footer;