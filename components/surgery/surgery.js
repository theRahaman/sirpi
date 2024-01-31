import React, { useState } from "react";
import styles from "./Surgery.module.css";
import Link from "next/link";
import Fancybox from "../utiliti/fancybox";

const surgeryImages = [
  {
    url: "assets/images/surgery_img.png",
    videoUrl: "https://www.youtube.com/watch?v=RZMKC6KWUC8"
  },
  {
    url: "assets/images/surgery_img2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=U2JxYFjN0g4"
  },
  {
    url: "assets/images/surgery_img3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZvCiah0zXIU"
  },
  {
    url: "assets/images/surgery_img2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=wtFLg8WZ9u4"
  },
  {
    url: "assets/images/surgery_img.png",
    videoUrl: "https://www.youtube.com/watch?v=R7adHOP1xQs"
  },
  {
    url: "assets/images/surgery_img2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5qXhi7NZcrQ"
  },
];

const surgeryItems = [
  "PLASTIC SURGERY",
  "ACNE SCAR TREATMENT",
  "pedicure",
  "skin allergy testing",
  "laser treatments",
  "hair fall treatments",
];

export default function Surgery() {
  const [displayindex, setindex] = useState(0);
  const handleMouseEnter = (index) => {
    setindex(index);
  };
  return (
    <section className={"surgery_sec both_gap pt-0"}>
      <img src={surgeryImages[displayindex].url} alt="loading" />
      <Fancybox surgeryclass = "surgery_fancy"
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a
          className={styles.fancy_btn}
          href={surgeryImages[displayindex].videoUrl}
          data-fancybox="gallery"
          data-caption="Caption #1"
        >
         Play
        </a>
      </Fancybox>
      <div className={styles.outer_surgery}>
        <div className={"container-fluid"}>
          <div className={styles.iner_surgery}>
            <ul>
              {surgeryItems.map((surgeryData, index) => {
                return (
                  <li key={index} onMouseEnter={() => handleMouseEnter(index)}>
                    {surgeryData} <span>{index}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
