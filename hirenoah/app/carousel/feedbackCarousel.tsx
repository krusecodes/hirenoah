"use client";

import { Card, Carousel, Divider, Typography } from 'antd';

import styles from "./feedback.module.css";

const { Paragraph, Title } = Typography

export default function FeedbackCarousel() {
  const contentStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    color: "#fff",
    textAlign: "center",
    background: "#000",
    paddingBottom: "48px"
  }

  return (
    <>
      <Divider />
      <h3 className={styles.projectTitle}>The Reviews</h3>
      <Card className={styles.carouselCard}>
        <Carousel>
          <div>
            <p style={contentStyle}>&quot;Noah started out at Aspire in a non-technical role and pursued his goals to become a software developer, successfully transitioning into an engineering role here. He is bright and learns quickly from a technical standpoint, but where he really impresses me is with his product engineering and leadership qualities. Noah cares about delivering great experiences to customers, engages with product managers and designers, and is proactive about making the team better. I highly recommend Noah for being an amazing teammate and person, and I&apos;m confident that he will make the culture of any team he joins better.&quot; -Suhaas Prasad, CTO & Cofounder at Aspire</p>
          </div>
          <div>
            <p style={contentStyle}>&quot;Noah is truly a remarkable individual. I first met Noah when he was aspiring to transition into an engineering role and he quickly impressed me (and everyone at work) with his ability to learn quickly. He&apos;s organized, dependable and goal oriented. Over the coarse of the next 3 years, I got to witness him graduate from an intense coding bootcamp while working his day job. He completed a split time internship with the engineering team and then successfully interviewed for and received an offer for a software engineering position at Aspire. Fast forward to present day, Noah has grown to be a confident, young talent who carries his listen-first approach and curious nature wherever he&apos;s involved. He&apos;s cemented himself as one of the most knowledgeable individuals about the core product and he&apos;s even won a few company hack-a-thons. The future is bright, I&apos;m staying tuned.&quot; -Samir Chugh, Engineering Manager at Zoox</p>
          </div>
          <div>
            <p style={contentStyle}>&quot;I had the pleasure of working with Noah in our software engineering team, and his zeal for learning truly stands out. Noah isn&apos;t just about writing code; he’s deeply curious about the product and user perspective. His constant drive to push both himself and our team has made a tangible impact, especially in refining our daily workflows. If you&apos;re looking for someone who marries technical skill with a product-first mindset, Noah is your person. I wholeheartedly endorse him for any forward-thinking team.&quot; -Jessica Lui, Software Engineer at Aspire</p>
          </div>
          <div>
            <p style={contentStyle}>&quot;Noah is a dedicated programmer whose enthusiasm and aptitude for learning is very infectious. Always positive and willing to put in the effort, Noah&apos;s natural desire to learn will take him far in his career. Noah exhibits a keen attention to detail with every task he undertakes and it was a pleasuring working with him at Aspire.&quot; -Dan Bruce, Principle Software Developer at BlueCatNetworks</p>
          </div>
        </Carousel>
      </Card>
    </>
  )
}