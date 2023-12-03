"use client";

import { Space, Typography } from 'antd';

import styles from './nav.module.css'

const { Text } = Typography;

export default function Nav() {
  return (
    <div className={styles.top}>
      <Text strong>NK.</Text>
      <Text>Projects</Text>
      <Text>Resume</Text>
      <Text>Contact</Text>
    </div>
  )
}
