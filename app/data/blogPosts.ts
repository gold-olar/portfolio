export interface BlogPost {
  id: string;
  title: string;
  platform: string;
  url: string;
  publishedDate?: string;
  description?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Your First Video Pipeline - FFmpeg and MediaMTX Basics",
    platform: "HackerNoon",
    url: "https://hackernoon.com/part-1building-your-first-video-pipeline-ffmpeg-and-mediamtx-basics",
    description: "Build a real-time video streaming pipeline with FFmpeg and MediaMTX. Learn to stream webcams to browsers using WebRTC with step-by-step tutorials. ",
  },
  {
    id: "2",
    title: "Beyond Localhost: Security, Authentication, and Real-World Sources",
    platform: "HackerNoon",
    url: "https://hackernoon.com/beyond-localhost-security-authentication-and-real-world-sources",
    description: "Secure your video streaming pipeline with JWT authentication, connect real IP cameras, and deploy production-ready MediaMTX with FFmpeg. Part 2 tutorial. ",
  },
  {
    id: "3",
    title: "A Practical Guide to Scaling Real-Time Video Infrastructure",
    platform: "HackerNoon",
    url:"https://hackernoon.com/beyond-localhost-security-authentication-and-real-world-sources",
    "description": "Learn how to scale real-time video streaming with FFmpeg & MediaMTX—architecting for performance, reliability, and global reach. ",
  },
  {
    id: "8",
    title: "From Traffic Cameras to Web Applications: A Streaming Architecture Overview",
    platform: "Medium",
    url:"https://medium.com/@gold_olar/from-traffic-cameras-to-web-applications-a-streaming-architecture-overview-218759743d86",
    "description": "Learn the basics of streaming architecture and how it works. ",
  },
  {
    id: "4",
    title: "The Linux File System",
    platform: "Hashnode",
    url:"https://goldinscrib.hashnode.dev/the-linux-file-system",
    "description": "Learn the basics of the Linux file system and how to navigate it. ",
  },
  {
    id: "5",
    title: "Bash Scripting (Part 1): Introduction to Bash Scripting",
    platform: "Hashnode",
    url:"https://goldinscrib.hashnode.dev/bash-scripting-p1",
    "description": "Learn the basics of Bash scripting and how to write simple scripts to automate tasks. ",
  },
  {
    id: "6",
    title: "Understanding the this keyword.",
    platform: "Medium",
    url:"https://medium.com/@gold_olar/understanding-the-this-keyword-7040ab48f161",
    "description": "Learn the basics of the this keyword and how it works in JavaScript. ",
  },
  {
    id: "7",
    title: "Understanding Call, Apply and Bind in Javascript.",
    platform: "Medium",
    url:"https://medium.com/@gold_olar/understanding-call-apply-and-bind-in-javascript-f05622ff1e25",
    "description": "Learn the basics of Call, Apply and Bind in JavaScript and how they work. ",
  },
];
