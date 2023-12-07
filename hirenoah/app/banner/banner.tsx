"use client";

import { Typography } from 'antd';
import styles from "./banner.module.css";

const { Title, Paragraph, Text } = Typography;

export default function Banner() {
  return (
    <div className={styles.container}>
      <img src="https://storage.cloud.google.com/hello-noah-images/Ellipse%201.svg" />
      <div className={styles.text}>
        <h3 className={styles.hello}>Hello there 👋. I really appreciate you stopping by.</h3>
        <h1 className={styles.bannerTitle}>I&apos;m Noah Kruse</h1>
        <p className={styles.bannerParagraph}>
          As a seasoned full-stack engineer with over 5 years of dedicated experience in the B2B software market, I am defined by my <Text className={styles.pUnderline}>user-centric</Text> approach and commitment to <Text className={styles.pUnderline}>feedback-driven development</Text>. I find immense satisfaction in the iterative process of building products, ensuring rapid progress and continuous improvement.
          <br />
          <br />
          One of my key strengths lies in my proactive <Text className={styles.pUnderline}>engagement with customers</Text>, a practice that ensures a profound understanding of their challenges. Collaborating seamlessly with designers and product managers, I contribute to the refinement and finalization of project specifications. Central to my passion is the craft of writing code that not only meets but surpasses expectations, consistently delivering exceptional solutions.
        </p>
      </div>
      {/* <div className={styles.ellipsis}>
        <img src="https://storage.cloud.google.com/hello-noah-images/Ellipse%201.svg" />
      </div> */}
    </div>
  );
}
