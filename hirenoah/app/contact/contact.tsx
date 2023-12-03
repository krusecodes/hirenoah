"use client";

import { Button, Typography, Divider } from 'antd';

import styles from './contact.module.css'

const { Text } = Typography

export default function Contact() {
  return (
    <div>
      <Divider />
      <div className={styles.buttons}>
      <Text>Contact</Text>
        <Button className={styles.button}>Send an Email</Button>
        <Button className={styles.button}>Linkedin</Button>
        <Button className={styles.button}>Github</Button>
      </div>
    </div>
  )
}