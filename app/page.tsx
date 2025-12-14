import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WorkTimeline from "./components/WorkTimeline";
import BlogSection from "./components/BlogSection";
// import TILSection from "./components/TILSection";
import ProjectsSection from "./components/ProjectsSection";
import AwardsSection from "./components/AwardsSection";
import ContactSection from "./components/ContactSection";
import { getTILPosts } from "./lib/getTILPosts";

export default function Home() {
  const tilPosts = getTILPosts();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <WorkTimeline />
      <BlogSection />
      {/* <TILSection posts={tilPosts} /> */}
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-900">
        <p>© {new Date().getFullYear()} Samuel Olamide. All rights reserved.</p>
      </footer>
    </main>
  );
}
