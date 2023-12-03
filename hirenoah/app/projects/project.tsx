"use client";

import { Card, Image, Space, Typography } from 'antd';


import styles from './project.module.css'


const { Paragraph, Link } = Typography;


interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  stack: string;
}

const Project: React.FC<ProjectProps> = ({ imageSrc, title, description, stack }) => {
  return (
    <Card className={styles.card}>
      <Image src={imageSrc} alt={`${title} Photo`} width={456} />
      <Paragraph>{title}</Paragraph>
      <Paragraph>{description}</Paragraph>
      <Paragraph>Stack: {stack}</Paragraph>
      <Link>Github</Link>
      {' | '}
      <Link>Demo</Link>
    </Card>
  );
};

export default Project;
