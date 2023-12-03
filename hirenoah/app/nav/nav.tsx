"use client";

import { Space, Typography } from 'antd';

import styles from './nav.module.css'

const { Text, Link } = Typography;

export default function Nav() {
  return (
    <>
    <Space className={styles.top} align="right" size="large">
        <Text strong>NK.</Text>
        <Text>Projects</Text>
        <Text>
          <Link className={styles.link} href="https://drive.google.com/file/d/1CmA03dq3_aidikKMIPWNHY1RSwP_CKyh/view?usp=sharing" rel="noreferrer noopener" target="_blank">
            Resume
          </Link>
        </Text>
        <Text>Contact</Text>
      </Space>
    </>
  )
}
