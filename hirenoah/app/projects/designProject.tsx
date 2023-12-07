"use client";

import { Card, Image, Typography } from 'antd';

import styles from './project.module.css'

const { Paragraph, Link } = Typography;

interface DesignProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  stack: string;
  projectLink: string;
}

const DesignProject: React.FC<DesignProjectProps> = ({ imageSrc, title, description, stack, projectLink }) => {
  return (
    <Card className={styles.card}>
      <Image src={imageSrc} alt={`${title} Photo`} />
      <div className={styles.projectInfoContainer}>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Stack: {stack}</p>
        <Link href={projectLink} rel="noopener noreferrer" target="_blank">Figma</Link>
      </div>
    </Card>
  );
};

export default DesignProject;