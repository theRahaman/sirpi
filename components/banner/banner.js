import styles from "./Banner.module.css";
import CountUp from "react-countup";
import Fancybox from "../utiliti/fancybox";

export default function banner() {
  return (
    <section className={styles.banner_sec}>
      {/* <video src='https://wedesignthemes.s3.amazonaws.com/sirpi-video/Sirpi+face-output.webm' type="video/webm" muted loop></video> */}
      <img
        src="https://sirpi.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/05/home-03-slider-bg.jpg"
        alt="loading"
      />
      <div className={styles.outerbnr}>
        <div className={"container-fluid"}>
          <div className={styles.inner_bnr}>
            <div className={styles.inr_content}>
              <h2>
                <span>HEALTHY SKIN</span>FIND OUT A NEW WAY TO TRADITIONAL SKIN
                CARE
              </h2>
              <p>
                Tincidunt eget nullam non nisi. Cursus eget nunc scelerisque{" "}
                <br />
                viverra mauris. Elit ut aliquam purus sit amet luctus.
              </p>
              <ul>
                <li>
                  <CountUp redraw="true" end={32} suffix="+" duration={5} />
                  <p>DOCTORS</p>
                </li>
                <li>
                  <CountUp redraw="true" end={84} prefix="M" duration={5} />
                  <p>PATIENTS</p>
                </li>
                <li>
                  <CountUp redraw="true" end={79} prefix="K" duration={5} />
                  <p>SURGERIES</p>
                </li>
              </ul>

              <div className={styles.fncy_part}>
                <p>
                  Curabitur et finibus nunc. Aliquam erat volutpat. Sed ac
                  pulvinar apie . Sed volutpat nisl nunc eu.
                </p>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <a className={styles.fancy_btn}
                  href="https://www.youtube.com/watch?v=9xwazD5SyVg"
                  data-fancybox="gallery"
                  data-caption="Caption #1"
                >
                  <img src="/assets/images/play.svg" alt="" />
                </a>
                </Fancybox>
                <a href="#" className={styles.common_btn}>
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
