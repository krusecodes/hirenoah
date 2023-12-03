"use client"

import { Space, Typography } from 'antd';

import { projects } from './projectData'
import Project from './project';

import styles from "./project.module.css"

const { Title } = Typography;

export default function Projects() {
  return (
    <>
      <Title level={4} className={styles.projectTitle}>Featured Projects</Title>
      <Space direction="horizontal" wrap size="large">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Space>
    </>
  );
}
