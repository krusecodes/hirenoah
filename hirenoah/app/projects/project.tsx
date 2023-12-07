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
          <h4>{title}</h4>
          <p>{description}</p>
          <p>Stack: {stack}</p>
          <a href={projectLink} rel="noopener noreferrer" target="_blank">Github</a>
        </div>
    </Card>
  );
};

export default Project;
