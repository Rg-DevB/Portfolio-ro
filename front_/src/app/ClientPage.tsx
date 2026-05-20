"use client"

import React from "react"
import { usePortfolio } from "@/src/context/PortfolioContext"
import { Loader2 } from "lucide-react"

import Hero from "@/src/components/Hero"
import About from "@/src/components/About"
import Skills from "@/src/components/Skills"
import Projects from "@/src/components/Projects"
import Experience from "@/src/components/Experience"
import Contact from "@/src/components/Contact"
import Footer from "@/src/components/Footer"

export default function ClientPage() {
  const {
    profile,
    skills,
    projects,
    experience,
    education,
    socials,
    isLoading,
    error
  } = usePortfolio();

  React.useEffect(() => {
    if (profile?.title) {
      document.title = profile.title;
    }
  }, [profile?.title]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-900">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-900 text-white">
        <p className="text-xl">Error loading portfolio: {error}</p>
      </div>
    );
  }

  return (
    <main className="relative">
      <section id="home">
        <Hero profileData={profile} socialsData={socials} />
      </section>

      <section id="about">
        <About profileData={profile} />
      </section>

      <section id="skills">
        <Skills skillsData={skills} />
      </section>

      <section id="projects">
        <Projects projectsData={projects} />
      </section>

      <section id="experience">
        <Experience experienceData={experience} educationData={education} />
      </section>

      <section id="contact">
        <Contact socialsData={socials} profileData={profile} />
      </section>

      <Footer profileData={profile} socialsData={socials} />
    </main>
  )
}
