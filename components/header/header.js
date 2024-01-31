import {useEffect, React} from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    useEffect(()=>{
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    })
    const isSticky = () =>{
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 125 ? header.classList.add('sticky') : header.classList.remove('sticky')
    };
  return (
    <>
    <header className={`${styles.header} header`}>
      <div className={styles.outerheader}>
       <div className={'container-fluid'}>
        <div className={'row align-items-center'}>
        <div className={'col-lg-4'}>
        <div className={styles.socail}>
            <ul>
                <li>
                <Link href='/pinterest'>
                <img src="/assets/images/pinterest.svg" alt='pinterest.svg' />
                </Link>
                </li>
                <li>
                <Link href='/twitters'>
                <img src="/assets/images/twitters.png" alt='twitters.png' />
                </Link>
                </li>
                <li>
                <Link href='/linkedin'>
                     <img src="/assets/images/linkedin.svg" alt='linkedin.svg' />
                </Link>
                </li>
                <li>
                <Link href='/facebook'>
                     <img src="/assets/images/facebook.svg" alt='facebook.svg'/>
                </Link>
                </li>
            </ul>
        </div>
        </div>
        <div className={`${styles.rightcontact} col-lg-8`}>
        <ul>
            <li>
            No: 58 A, East Madison Street, Baltimore, MD, USA 4508 
            </li>
            <li>
                <Link href='mailto:info@example.com'>info@example.com</Link>
            </li>
            <li>
                <Link href='tel:123456789'>000 - 123 - 456789</Link>
            </li>
        </ul>
        </div>
        </div>
        </div>
      </div>
      <div className={styles.bottom_hdr}>
        <div className={'container-fluid'}>
        <div className={styles.btm_inr}>
        <div className={styles.appoint_btn}>
        <Link href="#url" className={styles.headerbtn}>Appointment</Link>
        </div>
        <div className={styles.right_menu}>
        <div className={styles.logo}>
           <Link href='#url'><img src="/assets/images/logo.svg" alt='logo'/></Link>
        </div>
        <Nav variant="pills" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="#/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#/pages">Pages</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#/services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#/doctors">Doctors</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#/home">Home</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
        </div>
        </div>
      </div>
    </header>
    </>
    
  )
}
