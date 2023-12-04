"use client";

import { Button, Typography, Divider } from 'antd';
import styles from './contact.module.css';
import { CopyOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Contact() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Email copied to clipboard: ${text}`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <Divider />
      <div className={styles.footerContainer}>
        <div className={styles.buttons}>
          <div className={styles.emailButtons}>
            <Button icon={<MailOutlined />} href="mailto:noah.kruse321@gmail.com" target="_blank" className={styles.button}>
              Send an Email
            </Button>
            <Button
              icon={<CopyOutlined />}
              onClick={() => copyToClipboard('noah.kruse321@gmail.com')}
              className={styles.clippyButton}
            />
          </div>
          <Button icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/noahkruse" target="_blank" className={styles.button}>
            Linkedin
          </Button>
          <Button icon={<GithubOutlined />} href="https://www.github.com/krusecodes" target="_blank" className={styles.button}>
            Github
          </Button>
        </div>
      </div>
    </>
  );
}
