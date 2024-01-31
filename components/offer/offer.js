import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Office.module.css";
import Title from "../title/title";
import Link from "next/link";

const title = {
  sub_title: "OUR SERVICES",
  title: "KNOW WHAT WE OFFER",
  description:
    "Integer eu tellus sed ipsum semper vehicula ac vel nulla. Aenean tempor at cursus dapibus. Sed et mauris quis mauris vehicula porttitorm.",
};

const offerSlider = [
  {
    "url": "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/home-3-carousel-image-1.webp",
    "title": "FACIAL IMPLANTS",
    "description":
      "Congue tellus eget bellentesque ac tor sed coum erat. Fusce nunc ctetur.",
  },
  {
    "url": "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/Compre1-3.webp",
    "title": "FOREHEAD LIFT",
    "description": "Bellentesque ac tor sed coum erat. Fusce congue tellus eget nunc ctetur. ",
  },
  {
    "url": "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/compr1-2.webp",
    "title": "SKIN TREATMENT",
    "description":
      "Fusce congue tellus eget nunc ctetur. Pellentesque ac tor sed coum erat.",
  },
  {
    "url": "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/Comp1-1.webp",
    "title": "FACE TREATMENTS",
    "description":
      "Pellentesque ac tor sed coum erat. Fusce congue tellus eget nunc ctetur.",
  },
];

export default function Offer() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  // current index value 
  const [displayIndex, setIndex] = useState(1);
  function myindex(e) {
    console.log(e.currentTarget.id)
    setIndex(e.currentTarget.id)
  }

  return (
    <section className={`${styles["offer_sec"]} both_gap offer_sec`}>
        <span>
         current index {displayIndex} <br/>
          {offerSlider[displayIndex].url}
         
         </span>
      <div className={"container-fluid"}>
        <div className={styles.inner_office}>
          <Title pageTitle={title} servClass="offer_title" />
          <div className={styles.offer_sldr}>
            <Slider {...settings}>
              {offerSlider.map((sliderdata, index) => {
                return (
                  <div key={index} className={styles.offer_box}>
                    <figure className={styles.fig}>
                      <img
                        src={sliderdata.url}
                        alt="loading"
                      />
                      <Link href="#url">Know More</Link>
                    </figure>
                    <div className={styles.offer_cont}>
                      <h3>
                        {index}</h3>
                      <div className={styles.right_cont}>
                        <h4><Link href={`../../pages/page`} id={index} onClick={myindex}>{sliderdata.title}</Link></h4>
                        <p>{sliderdata.description}</p>
                      </div>
                    </div>
                    {/* ${displayIndex} */}
                  </div>
                )
              })}
            </Slider>
       
         
          </div>
        </div>
      </div>
    </section>
  );
}
