"use client";
import {
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Palette,
  Twitter,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function DeveloperCredits() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: "Next.js", icon: "⚡", color: "text-white" },
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "TypeScript", icon: "📘", color: "text-blue-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400" },
    { name: "Razorpay", icon: "💳", color: "text-green-400" },
  ];

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "Lightning-fast performance" },
    { icon: <Code className="h-5 w-5" />, text: "Clean, maintainable code" },
    { icon: <Palette className="h-5 w-5" />, text: "Modern, elegant design" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="text-xs uppercase tracking-widest text-neutral-500 border border-neutral-800 px-4 py-2">
                Developer Credits
              </span>
            </div>

            {/* Avatar */}
            <div className="mb-12">
              <div className="relative w-40 h-40 mx-auto">SS</div>
            </div>

            {/* Name & Title */}
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
              Sunny Sarje
            </h1>
            <p className="text-xl text-neutral-400 font-light mb-8">
              Software Engineer
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-neutral-800 mx-auto mb-12"></div>

            {/* Description */}
            <p className="text-lg text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto mb-12">
              Independent developer specializing in crafting elegant web
              experiences. This platform was built for{" "}
              <span className="text-white font-medium">DREVO Events</span> to
              deliver exceptional event experiences through seamless ticket
              booking and event management.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <a
                href="mailto:sunny@example.com"
                className="group p-3 border border-neutral-800 hover:border-neutral-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/sunny-sarje-315344173/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-neutral-800 hover:border-neutral-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-neutral-800 pt-16 pb-12">
              <h2 className="text-3xl font-light text-center mb-12">
                Built With
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    //@ts-expect-error
                    onMouseEnter={() => setHoveredTech(idx)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`
                      p-6 border border-neutral-800 text-center transition-all duration-300
                      ${
                        hoveredTech === idx
                          ? "border-neutral-600 bg-neutral-900/30 scale-105"
                          : "hover:border-neutral-700"
                      }
                    `}
                  >
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <p
                      className={`text-sm font-light ${
                        hoveredTech === idx ? tech.color : "text-neutral-400"
                      } transition-colors`}
                    >
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-neutral-800 pt-16 pb-12">
              <h2 className="text-3xl font-light text-center mb-12">
                Key Features
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <div className="text-neutral-500 mb-4">{feature.icon}</div>
                    <p className="text-neutral-300 font-light">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="border-t border-neutral-800 pt-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                    Client Project
                  </h3>
                  <p className="text-2xl font-light text-white mb-4">
                    DREVO Events
                  </p>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    A comprehensive event management and ticketing platform
                    designed and developed as a freelance project to streamline
                    the booking experience for premium events in Chh.
                    Sambhajinagar.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                    Services Provided
                  </h3>
                  <ul className="space-y-3 text-neutral-400 font-light">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      Full Stack Development
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      UI/UX Design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      Payment Integration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      API Development & Deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="border border-neutral-800 p-12 text-center">
              <h2 className="text-3xl font-light mb-6">
                Available for Projects
              </h2>
              <p className="text-neutral-400 font-light mb-8 max-w-xl mx-auto">
                Looking for a dedicated developer for your next project? I
                specialize in building modern, performant web applications from
                concept to deployment.
              </p>
              <a
                href="https://wa.link/h76mvl"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-medium hover:bg-neutral-200 transition-colors group"
              >
                Contact me!
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-500 font-light">
                © 2024 Sunny Sarje. All rights reserved.
              </p>
              <p className="text-sm text-neutral-500 font-light">
                Crafted with <span className="text-red-500">♥</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
