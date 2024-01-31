import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function footer() {
  const [DisplyYear] = useState(new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <div className={"container-fluid"}>
        <div className={styles.fter_iner}>
          <div className={"row"}>
            <div className={`${styles.news_letter} col-lg-3`}>
              <form className={styles.newsltr}>
                <span>NEWSLETTER</span>
                <h2>GET IN TOUCH</h2>
                <div className={styles.letter_wrap}>
                  <input type="email" className={"form-control"} />
                  <input
                    type="submit"
                    value=" "
                    className={styles.submit_btn}
                  />
                </div>
              </form>
            </div>
            <div className={`col-lg-6 ${styles.links}`}>
              <div className={"row"}>
                <div className={"col-lg-4"}>
                  <h5>Links</h5>
                  <ul>
                    <li>
                      <Link href="#url">Home</Link>
                    </li>
                    <li>
                      <Link href="#url">Services</Link>
                    </li>
                    <li>
                      <Link href="#url">Doctors</Link>
                    </li>
                    <li>
                      <Link href="#url">About</Link>
                    </li>
                  </ul>
                </div>
                <div className={"col-lg-8"}>
                  <h5>Contact</h5>
                  <ul>
                    <li>
                      <Link href="tel:123456789">000 - 123 - 456789</Link>
                    </li>
                    <li>
                      <Link href="mailto:sirpi@example.com">
                        sirpi@example.com
                      </Link>
                    </li>
                    <li>
                      No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles.news_letter} col-lg-3`}>
              <figure>
                <img
                  src="https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/footer-logo-main.svg"
                  alt="loading"
                />
              </figure>
              <p>
                Curabitur et finibus nunc. Aliquam volutpat. Sed ac pulvinar
                sapien.
              </p>
              <div className={styles.socail_media}>
                <ul>
                  <li>
                    <Link href="/pinterest">
                      <img
                        src="/assets/images/pinterest.svg"
                        alt="pinterest.svg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/twitters">
                      <img
                        src="/assets/images/twitters.png"
                        alt="twitters.png"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/linkedin">
                      <img
                        src="/assets/images/linkedin.svg"
                        alt="linkedin.svg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/facebook">
                      <img
                        src="/assets/images/facebook.svg"
                        alt="facebook.svg"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={'row align-items-center'}>
            <div className={'col-lg-6'}>
              <img src="assets/images/paymnt.png" alt="loading"/>
            </div>
            <div className={'col-lg-6'}>
             <p>{'© ' + DisplyYear +' Sirpi Wedesigntech'}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
