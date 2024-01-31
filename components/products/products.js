import React from "react";
import styles from "./Products.module.css";
import Slider from "react-slick";
import Title from "../title/title";

const title = {
  sub_title: "NEW ARRIVAL",
  title: "PICK YOUR SKIN PROTECT PRODUCTS",
  description:
    "Curabitur et fius nunc. Aliquam erat volutpat. Sed ac pulvinar sapien. volutpat nisl nunc, eu efficitur ipsum vulputate finibus.",
};

const productsData = [
  {
    normalUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.1.webp",
    hoverlUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.2.webp",
    title: "ULTRA SHINE SERUM",
    price: 15.00,
  },
  {
    normalUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-1.1.webp",
    hoverlUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-1.2.webp",
    title: "ULTRA SHINE SERUM",
    price: 15.00,
  },
  {
    normalUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.1.webp",
    hoverlUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.2.webp",
    title: "ULTRA SHINE SERUM",
    price: 15.00,
  },
  {
    normalUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-1.1.webp",
    hoverlUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-1.2.webp",
    title: "ULTRA SHINE SERUM",
    price: 15.00,
  },
  {
    normalUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.1.webp",
    hoverlUrl:
      "https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/shop-8.2.webp",
    title: "ULTRA SHINE SERUM",
    price: 15.00,
  }
];

export default function Products() {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <section className={`products_sec both_gap`}>
      <div className={"container-fluid"}>
        <div className={styles.iner_products}>
          <Title pageTitle={title} />
          <Slider {...settings}>
            {productsData.map((productsData, index) => {
              return (
                <div key={index} className={styles.products_box}>
                  <figure>
                    <img
                      className={styles.normal_img}
                      src={productsData.normalUrl}
                      alt="loading"
                    />
                    <img
                      className={styles.hover_img}
                      src={productsData.hoverlUrl}
                      alt="loading"
                    />
                  </figure>
                 <h4>{productsData.title}</h4>
                 <p>{'$ '+productsData.price}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
