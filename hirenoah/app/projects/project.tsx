"use client";

import { Card, Image, Space, Typography } from 'antd';


import styles from './project.module.css'


const { Paragraph, Link } = Typography;


interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  stack: string;
  projectLink: string;
}

const Project: React.FC<ProjectProps> = ({ imageSrc, title, description, stack, projectLink }) => {
  return (
    <Card className={styles.card}>
      <Image src={imageSrc} className={styles.image} alt={`${title} Photo`} />
      <div className={styles.projectInfoContainer}>
        <Paragraph strong>{title}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <Paragraph>Stack: {stack}</Paragraph>
        <Link href={projectLink} rel="noopener noreferrer" target="_blank">Github</Link>
      </div>
    </Card>
  );
};

export default Project;
