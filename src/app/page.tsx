"use client";

import React, { ElementType } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Youtube, 
  BarChart3, 
  Zap, 
  Globe, 
  Fingerprint,
  ChevronRight,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Components ---

const Navbar = () => (
  <motion.header 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5 bg-background/50"
  >
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
        <ShieldCheck className="text-black w-5 h-5" />
        <div className="absolute inset-0 bg-white/20 blur-lg rounded-full animate-glow" />
      </div>
      <span className="font-bold text-xl tracking-tight text-white">Credify</span>
    </Link>
    
    <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/50">
      {["Features", "Proof of Learning", "Verification", "Pricing"].map((item) => (
        <Link 
          key={item} 
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
          className="hover:text-white transition-colors relative group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      <Link href="/dashboard" className="hidden sm:block text-sm font-medium text-white/50 hover:text-white transition-colors">
        Dashboard
      </Link>
      <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        Get Started
      </Button>
    </div>
  </motion.header>
);

const SectionHeader = ({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) => (
  <div className="flex flex-col items-center text-center space-y-4 mb-16">
    {badge && (
      <Badge variant="outline" className="bg-white/5 border-white/10 text-white/70 uppercase tracking-widest px-3 py-1 rounded-full text-[10px] font-bold">
        {badge}
      </Badge>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient max-w-2xl">
      {title}
    </h2>
    <p className="text-white/50 text-lg max-w-xl leading-relaxed">
      {subtitle}
    </p>
  </div>
);

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative p-8 rounded-3xl glass transition-all hover:bg-white/10"
  >
    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
    <div className="relative z-10 space-y-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-white/50 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

// --- Main Page ---

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] -z-10" />

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 mb-8"
          >
            <Badge className="bg-white text-black hover:bg-white text-[10px] font-bold">ALPHA</Badge>
            <span className="text-xs font-medium text-white/70">Secure your spot for the Private Beta</span>
            <ChevronRight className="w-3 h-3 text-white/40" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]"
          >
            Your Knowledge, <br />
            <span className="text-white/30 italic">Independently</span> <br />
            Verified.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
          >
            Credify turns educational content into verifiable career assets. 
            Track your YouTube learning in real-time and mint blockchain-backed 
            certificates that employers trust.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 text-lg font-bold group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" className="h-14 px-10 rounded-full border border-white/10 hover:bg-white/5 text-lg font-medium gap-2">
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-24 w-full max-w-4xl"
          >
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-8">
              Verified Learning Sources
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-40 hover:opacity-100 transition-opacity">
              {["MIT OCW", "Stanford Online", "freeCodeCamp", "Harvard CS50", "Google Devs"].map(name => (
                <span key={name} className="text-xl md:text-2xl font-black italic tracking-tighter whitespace-nowrap">{name}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Proof of Learning Showcase */}
      <section id="proof-of-learning" className="py-32 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Intelligent Proof"
            title="Beyond the Play Button."
            subtitle="Most platforms only track if a video was opened. Credify verifies if you actually learned."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { 
                  icon: Fingerprint, 
                  title: "Biometric Presence", 
                  desc: "Optional eye-tracking and tab-active detection ensure you're actually watching." 
                },
                { 
                  icon: Zap, 
                  title: "AI Engagement Checks", 
                  desc: "Sporadic, context-aware prompts confirm your understanding of key concepts." 
                },
                { 
                  icon: BarChart3, 
                  title: "Retention Scoring", 
                  desc: "Proprietary algorithms calculate a 'Retention Score' for every hour watched." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video rounded-[40px] glass overflow-hidden border-white/10 p-4"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="h-full w-full bg-black/40 rounded-[32px] border border-white/5 flex flex-col p-8">
                {/* Visual Representation of the Extension UI */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase">Tracking Active</p>
                      <p className="text-sm font-bold truncate">System Design Interview Guide</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3">
                    98.2% Focus
                  </Badge>
                </div>

                <div className="flex-1 space-y-6">
                  {[75, 42, 90].map((w, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-white/40">
                        <span>COMPONENT {i+1}</span>
                        <span>{w}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                          className="h-full bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-black" />
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-white/30 uppercase">Live with 4,209 others</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verification" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Security"
            title="Blockchain-Backed Integrity."
            subtitle="Every certificate is minted as a unique soulbound token. Permanent, unchangeable, and globally verifiable."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe}
              title="Global Verification"
              description="Share your credentials with a simple link. Anyone, anywhere can verify the authenticity on the Ethereum blockchain."
              delay={0.1}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Tamper-Proof Proofs"
              description="Once a certificate is issued, the metadata—including hours watched and retention score—is locked in perpetuity."
              delay={0.2}
            />
            <FeatureCard 
              icon={Fingerprint}
              title="Soulbound Identity"
              description="Credentials are tied to your verified identity, preventing transfer or misuse of your hard-earned knowledge."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 space-y-8">
            <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-float">
              <Download className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to prove your skills?</h2>
            <p className="text-white/50 text-xl max-w-xl mx-auto leading-relaxed">
              Join 12,000+ engineers, designers, and marketers who are building their 
              on-chain educational profile with Credify.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="h-16 px-12 rounded-full bg-white text-black hover:bg-white/90 text-xl font-bold shadow-2xl">
                Add to Chrome — It&apos;s Free
              </Button>
              <p className="text-sm font-medium text-white/30">Available on Chrome, Edge, and Brave</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "How does the extension verify learning?", a: "We use a combination of active tab detection, mouse movement patterns, and intelligent AI engagement checks that appear periodically during the video." },
            { q: "Which YouTube channels are supported?", a: "We support over 50,000 educational channels including MIT OCW, Harvard CS50, Stanford Online, and major developer platforms. New channels are added daily via community voting." },
            { q: "Are the certificates really on the blockchain?", a: "Yes. Every certificate is minted as an NFT (ERC-721) on Ethereum L2 (Polygon) with the educational metadata stored permanently via IPFS." },
            { q: "Is my privacy protected?", a: "Absolutely. We only track activity on supported educational URLs. We never record your screen, camera, or audio. Your data is encrypted and you have full control over what is shared." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/5 px-4 rounded-2xl mb-4 glass transition-all hover:bg-white/5">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-white/50 leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-black w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Credify</span>
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              The premium proof-of-learning platform for the modern professional. 
              Verify your skills, build your credibility.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          
          {[
            { title: "Product", links: ["Features", "Security", "Roadmap", "Pricing"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Resources", links: ["Documentation", "Community", "Support", "API"] }
          ].map((col, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
            © 2026 Credify INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
