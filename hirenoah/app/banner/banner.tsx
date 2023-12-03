"use client";

import { Typography } from 'antd';

import styles from "./banner.module.css";

const { Title, Paragraph } = Typography;

export default function Banner() {
  return (
    <>
      <Paragraph className={styles.hello}>Hello, I{'`'}m</Paragraph>
      <Title className={styles.bannerTitle}>Noah Kruse</Title>
      <Paragraph className={styles.bannerParagraph}>
        I am deeply passionate about solving customer problems.
        Rooted in my customer-facing experience, I have cultivated a profound empathy for users, shaping me into a feedback-centric engineer.
        With every new process or feature, my objective is to meticulously measure its real impact and iterate for continuous improvement.
        As a software engineer, my commitment is to ensure that everything I undertake is meticulously measured and consistently enhanced.
      </Paragraph>
    </>
  )
}