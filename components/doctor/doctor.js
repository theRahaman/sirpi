import React from "react";
import Title from "../title/title";
import styles from "./Doctor.module.css";
const title = {
    "sub_title":"OUR DOCTERS",
    "title":"EXPLORE YOUR BEAUTIFUL SKIN",
    "description":"Xirem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo ex  ornare id maximus quis, gravida ornare urna. Nuursus m Maecenas et dui eleifend, tempor nulla sit amet, fermentum erat. Proin commodo eros vel risus dapibus, sit amet vehicula lec porttitor fermentum elit a auctor. Duis luctus arcu maximus, varius erat ac, commodo ex. Donec justo nisi, tristiqu"
}
export default function Doctor() {
  return (
    <section className={`${styles['doctor_sec']} both_gap`}>
      <div className={"container"}>
        <div className={styles.inner_doctor}>
            <Title pageTitle={title} />
            <div className={`${styles.doctor_propfl} text-center`}>
                <img src="assets/images/signature_logo.jpg" alt="loading" />
                <h3>DR. THOMAS JOCOB</h3>
                <p>COSMETIC SPECIALIST</p>
            </div>
        </div>
      </div>
    </section>
  );
}
