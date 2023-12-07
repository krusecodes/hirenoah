"use client"

import { useState } from 'react';
import { Space, Typography, Radio, RadioChangeEvent } from 'antd';

import { engProjectData } from './engProjectData'
import { designProjectData } from './designProjectData'
import Project from './project';
import DesignProject from './designProject';

import styles from "./project.module.css"

const { Title } = Typography;

export default function Projects() {
  const [displayDesignProjects, setDisplayDesignProjects] = useState<boolean>(false);
  const [displayEngProjects, setDisplayEngProjects] = useState<boolean>(true);

  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
    if (e.target.value === 'design') {
      setDisplayDesignProjects(true)
      setDisplayEngProjects(false)
    } else if (e.target.value === 'eng') {
      setDisplayDesignProjects(false)
      setDisplayEngProjects(true)
    }
  };


  return (
    <>
      <div id="projectsSection" className={styles.projectsHeader}>
        <h3 className={styles.projectTitle}>The Projects</h3>
        {/* <Radio.Group onChange={onChange} defaultValue="eng" buttonStyle="solid">
          <Radio.Button value="eng">Engineering Projects</Radio.Button>
          <Radio.Button value="design">Design Projects</Radio.Button>
        </Radio.Group> */}
      </div>
      <Space direction="horizontal" wrap size="large" className={styles.cardSpace}>
        {displayEngProjects && (
          engProjectData.map((engProject: any) => (
            <Project key={engProject.id} {...engProject} />
          ))
        )}
        {displayDesignProjects && (
          designProjectData.map((designProject: any) => (
            <DesignProject key={designProject.id} {...designProject} />
          ))
        )}
      </Space>
    </>
  );
}
