"use client";

import { Card, Image, Typography } from 'antd';


import styles from './project.module.css'


const { Paragraph, Link } = Typography;


interface DesignProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  stack: string;
}

const DesignProject: React.FC<DesignProjectProps> = ({ imageSrc, title, description, stack }) => {
  return (
    <Card className={styles.card}>
      <Image src={imageSrc} alt={`${title} Photo`} />
      <Paragraph>{title}</Paragraph>
      <Paragraph>{description}</Paragraph>
      <Paragraph>Stack: {stack}</Paragraph>
      <Link>Github</Link>
      {' | '}
      <Link>Demo</Link>
    </Card>
  );
};

export default DesignProject;