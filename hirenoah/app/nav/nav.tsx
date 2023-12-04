"use client";

import { Space, Typography } from 'antd';
import styles from './nav.module.css';

const { Text, Link } = Typography;

export default function Nav() {
  const scrollToBottom = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // You can change this to 'auto' for an instant scroll
    });
  };

  const scrollToProjects = () => {
    // Get the element with id "projectsSection"
    const projectsSection = document.getElementById('projectsSection');

    // Scroll to the top of the "projectsSection" element
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Space className={styles.top} align="start" size="large">
        <Text strong>NK.</Text>
        <Text onClick={scrollToProjects} style={{ cursor: 'pointer' }}>Projects</Text>
        <Text>
          <Link
            className={styles.link}
            href="https://drive.google.com/file/d/1CmA03dq3_aidikKMIPWNHY1RSwP_CKyh/view?usp=sharing"
            rel="noreferrer noopener"
            target="_blank"
          >
            Resume
          </Link>
        </Text>
        <Text onClick={scrollToBottom} style={{ cursor: 'pointer' }}>
          Contact
        </Text>
      </Space>
    </>
  );
}
