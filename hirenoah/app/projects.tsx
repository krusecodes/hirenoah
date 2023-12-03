"use client";

import { Image, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Projects() {
  return (
    <>
      <Title level={4}>Featured Projects</Title>
      <Image src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Youtube Project Photo"/>
      <Paragraph>YouTube Clone</Paragraph>
      <Paragraph>YouTube Clone</Paragraph>
    </>
  );
}
