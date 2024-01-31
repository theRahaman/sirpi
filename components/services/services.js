import React from "react";
import styles from "./Services.module.css";
import Title from "../title/title";
const title = {
    "sub_title":"OUR SERVICES",
    "title":"WHAT KIND OF SERVICE WE PROVIDE",
    "description":"Integer erat arc mollis fringilla auctor sit amet, egestas a mauris. Maecenas luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

const skin_parts =[
    {
        'id':0,
        "title": "Skin Treatment",
        "url":"assets/images/skin_icon.svg"
    },
    {
        'id':1,
        "title": "Wrinkle Removal",
        "url":"assets/images/skin_icon2.svg"
    },
    {
       'id':2,
        "title": "SCAR REMOVAL",
        "url":"assets/images/skin_icon3.svg"
    },
    {
       'id':3,
        "title": "GASTRIC BANDING",
        "url":"assets/images/skin_icon4.svg"
    }
]

export default function Services() {
  return (
    <section className={styles.services_sec}>
      <div className={"container-fluid"}>
        <div className={styles.inner_services}>
            <div className={'row align-items-center'}>
                <div className={'col-lg-6'}>
                <Title pageTitle={title} servClass="services_title"/>
                  <div className={styles.skin_part}>
                    <div className={'row row-cols-sm-2 g-3'}>
                        {
                            skin_parts.map((skindata, index) =>{
                                return( 
                                <div key={index} className={'col'}>
                                <div className={styles.skinbox}>
                                    <h5>{skindata.title}</h5>
                                    <figure>
                                        <img src={skindata.url} alt="loading"/>
                                    </figure>
                                </div>
                                </div>
                              )
                            })
                        }  
                    </div>
                  </div>
                </div>
                <div className={`${'col-lg-6'} ${styles['service_right']}`}>
                 <img src="https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/filler-image-01.jpg" alt="loading"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
