"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";

// --- Wave Component ---
const Wave = ({ className }: { className?: string }) => (
  <svg 
    fill="none" 
    height="120" 
    viewBox="0 0 1440 120" 
    width="1440" 
    className={className}
  >
    <clipPath id="wave">
      <path d="m0 0h1440v120h-1440z" />
    </clipPath>
    <g clipPath="url(#wave)">
      <ellipse cx="720" cy="-600" fill="currentColor" rx="1316" ry="720" />
    </g>
  </svg>
);

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="oku-landing-page min-h-screen relative overflow-x-hidden text-black bg-[#FAF9F7]">
      
      {/* Floating Navbar */}
      <header className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 flex items-center justify-center ${scrolled ? 'bg-[#FAF9F7]/95 border-b border-[#E8E8E9] shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <ShieldCheck className="text-white w-4.5 h-4.5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-black">Credify</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#46474E]">
            <Link href="#features" className="hover:text-black transition-colors">Explore</Link>
            <Link href="#import" className="hover:text-black transition-colors">Integrations</Link>
            <Link href="#team" className="hover:text-black transition-colors">Team</Link>
            <Link href="https://twitter.com/credify" target="_blank" className="hover:text-black transition-colors flex items-center gap-1">
              Twitter <ExternalLink className="w-3 h-3" />
            </Link>
            <Link href="mailto:support@credify.so" className="hover:text-black transition-colors">Contact</Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-[#46474E] hover:text-black transition-colors">
              Sign in
            </Link>
            <Link href="/login">
              <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0">
                Join
              </button>
            </Link>
          </div>

          {/* Mobile Burger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F7] flex flex-col p-6 pt-24 md:hidden">
          <nav className="flex flex-col gap-6 text-xl font-normal text-black mt-8">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75">Explore</Link>
            <Link href="#import" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75">Integrations</Link>
            <Link href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75">Team</Link>
            <Link href="https://twitter.com/credify" target="_blank" className="hover:opacity-75 flex items-center gap-1.5">
              Twitter <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="mailto:support@credify.so" className="hover:opacity-75">Contact</Link>
            <div className="h-px bg-[#E8E8E9] my-4" />
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75">Sign in</Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-black text-white w-full py-3 rounded-full text-base font-semibold shadow-xs">
                Join for free
              </button>
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-28 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h1 className="oku-font-serif text-5xl md:text-6xl text-black font-normal leading-[1.1] mb-6">
            Verify your learning and build your library
          </h1>
          <p className="text-[#46474E] text-lg md:text-xl leading-relaxed mb-8 max-w-md">
            Credify transforms educational video engagement into verified credentials. Track YouTube learning in real-time and mint your sovereign proof-of-learning library.
          </p>
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link href="/login" className="w-full sm:w-auto">
              <button className="bg-black text-white w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold hover:bg-neutral-800 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0">
                Join for free
              </button>
            </Link>
            <Link href="https://chrome.google.com/webstore" target="_blank" className="w-full sm:w-auto">
              <button className="bg-[#F3F4F4] text-[#131314] w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold hover:bg-[#E8E8E9] transition-all">
                Install Extension
              </button>
            </Link>
          </div>
          <p className="text-sm text-[#8C8C90] mt-5">
            Already a member? <Link href="/login" className="text-[#46474E] hover:text-black underline transition-colors">Sign in.</Link>
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <img 
            src="/images/homepage/bookcase.png" 
            alt="Credify Library Showcase" 
            className="w-full max-w-[480px] h-auto object-contain transition-transform duration-700 hover:scale-[1.01]" 
          />
        </div>
      </section>

      {/* Features grid */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-6">
        
        {/* Block 1 (Wide) */}
        <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pt-12 border border-black/2 shadow-xs">
          <div className="px-6 md:px-12 text-center pb-6">
            <h2 className="oku-font-serif text-3xl md:text-4xl text-black font-normal mb-3">
              Track your learning and build your library
            </h2>
            <p className="text-[#46474E] text-base md:text-lg max-w-lg mx-auto">
              Simple to use &amp; easy on the eye – no spreadsheets, manuals or manual logs needed.
            </p>
          </div>
          <div className="flex justify-center -mb-16 md:-mb-28">
            <img 
              src="/images/homepage/trackYourReading.png" 
              alt="Track learning progress" 
              className="w-[90%] max-w-[860px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>

        {/* Top Grid (Discover & Goals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Block 2 (Grid left - Discover) */}
          <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pt-12 border border-black/2 shadow-xs">
            <div className="px-6 text-center pb-6">
              <h2 className="oku-font-serif text-3xl text-black font-normal mb-3">
                Discover your next tutorial
              </h2>
              <p className="text-[#46474E] text-base max-w-sm mx-auto">
                Connect with peers to see what playlists they&apos;re watching, or explore recommendations from the Credify community.
              </p>
            </div>
            <div className="flex justify-center -mb-56 md:-mb-64">
              <img 
                src="/images/homepage/discoverBooks.png" 
                alt="Discover courses" 
                className="w-full max-w-[280px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
          </div>

          {/* Block 3 (Grid right - Goals) */}
          <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pb-12 pt-0 border border-black/2 shadow-xs">
            <div className="flex justify-center -mt-56 md:-mt-64 mb-6">
              <img 
                src="/images/homepage/setReadingGoal.png" 
                alt="Habit tracking goals" 
                className="w-full max-w-[280px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
            <div className="px-6 text-center">
              <h2 className="oku-font-serif text-3xl text-black font-normal mb-3">
                Kickstart your learning habit
              </h2>
              <p className="text-[#46474E] text-base max-w-sm mx-auto">
                Motivate yourself to stay on track and maintain consistency with a customizable study goal.
              </p>
            </div>
          </div>
        </div>

        {/* Block 4 (Wide - Stats) */}
        <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pt-12 border border-black/2 shadow-xs">
          <div className="px-6 md:px-12 text-center pb-6">
            <h2 className="oku-font-serif text-3xl md:text-4xl text-black font-normal mb-3">
              See your personalized learning stats
            </h2>
            <p className="text-[#46474E] text-base md:text-lg max-w-lg mx-auto">
              Analyze watch duration, finished playlists, category distributions, and monthly consistency index.
            </p>
          </div>
          <div className="flex justify-center -mb-20 md:-mb-36">
            <img 
              src="/images/homepage/unlockStats.png" 
              alt="Personalized statistics" 
              className="w-[90%] max-w-[860px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>

        {/* Bottom Grid (Collections & Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Block 5 (Grid left - Collections) */}
          <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pt-12 border border-black/2 shadow-xs">
            <div className="px-6 text-center pb-6">
              <h2 className="oku-font-serif text-3xl text-black font-normal mb-3">
                Create custom collections
              </h2>
              <p className="text-[#46474E] text-base max-w-sm mx-auto">
                Organize your certifications and proofs of learning into curated collections to share with recruiters or peers.
              </p>
            </div>
            <div className="flex justify-center -mb-40 md:-mb-44">
              <img 
                src="/images/homepage/createCollections.png" 
                alt="Create custom collections" 
                className="w-full max-w-[280px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
          </div>

          {/* Block 6 (Grid right - Reviews) */}
          <div className="bg-[#F3F4F4] rounded-[28px] overflow-hidden flex flex-col justify-between pt-12 border border-black/2 shadow-xs">
            <div className="px-6 text-center pb-6">
              <h2 className="oku-font-serif text-3xl text-black font-normal mb-3">
                Read community reviews
              </h2>
              <p className="text-[#46474E] text-base max-w-sm mx-auto">
                Discover honest ratings on playlists, channels and courses written by other developers.
              </p>
            </div>
            <div className="flex justify-center -mb-28 md:-mb-36">
              <img 
                src="/images/homepage/readReviews.png" 
                alt="Read course reviews" 
                className="w-full max-w-[340px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>

      </section>

      {/* Switch / Switch Block (Liberate) */}
      <section id="import" className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 border-b border-[#E8E8E9] pb-24 mb-20">
        <div className="md:w-[55%] flex flex-col items-start">
          <h2 className="oku-font-serif text-4xl md:text-5xl text-black font-normal leading-[1.1] mb-6">
            You&apos;re in good company
          </h2>
          <p className="text-[#46474E] text-lg leading-relaxed max-w-md">
            Thousands of students are migrating their verification records. Sync your historical YouTube watched history, bookmarks, and certifications. Don&apos;t loathe your progress list –– liberate it.
          </p>
        </div>
        <div className="md:w-[45%] w-full flex flex-col gap-6 relative">
          
          {/* Tweet 1 */}
          <div className="bg-[#F3F4F4] p-6 rounded-2xl border border-[#E8E8E9]/40 max-w-md ml-auto relative md:w-[110%] z-10 shadow-xs hover:border-black/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/homepage/aziz.png" alt="Femke avatar" className="w-10 h-10 rounded-full border border-black/5 object-cover" />
              <div>
                <h4 className="text-sm font-bold text-black leading-none">fem</h4>
                <span className="text-xs text-[#8C8C90]">@femke</span>
              </div>
              <span className="text-xs text-[#8C8C90] ml-auto">Mar 23</span>
            </div>
            <p className="text-[#131314] text-[15px] leading-relaxed">
              i still think @credify was my favorite new app of 2026. Such a refreshing experience from standard LinkedIn pdf certifications. 🎓
            </p>
          </div>

          {/* Tweet 2 */}
          <div className="bg-[#F3F4F4] p-6 rounded-2xl border border-[#E8E8E9]/40 max-w-md ml-auto md:w-[110%] md:translate-x-[10%] shadow-xs hover:border-black/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/homepage/joe.png" alt="Joe avatar" className="w-10 h-10 rounded-full border border-black/5 object-cover" />
              <div>
                <h4 className="text-sm font-bold text-black leading-none">Joe Russell</h4>
                <span className="text-xs text-[#8C8C90]">@Joebob</span>
              </div>
              <span className="text-xs text-[#8C8C90] ml-auto">Feb 21</span>
            </div>
            <p className="text-[#131314] text-[15px] leading-relaxed">
              Credify is really lovely and simple. It works for people who have barely coded in years as well as those who consume more playlists than food.
            </p>
          </div>

        </div>
      </section>

      {/* More Info Section */}
      <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24 border-b border-[#E8E8E9] mb-20">
        <div className="flex flex-col gap-12">
          {/* Column 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-[30%]">
              <h4 className="text-sm font-bold text-[#8C8C90] uppercase tracking-wider">Looking to switch?</h4>
            </div>
            <div className="md:w-[70%] text-left">
              <h3 className="oku-font-serif text-2xl text-black font-normal mb-2">Import from YouTube &amp; Github</h3>
              <p className="text-[#46474E] text-base leading-relaxed">
                There&apos;s no need to start over -- our automated sync tools can import your learning history, bookmarks, and watched playlists in seconds. No fuss.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-[30%]">
              <h4 className="text-sm font-bold text-[#8C8C90] uppercase tracking-wider">Data &amp; Privacy</h4>
            </div>
            <div className="md:w-[70%] text-left">
              <h3 className="oku-font-serif text-2xl text-black font-normal mb-2">Retain control of your data</h3>
              <p className="text-[#46474E] text-base leading-relaxed">
                Your data is your business, not ours. We&apos;ll never sell it to third parties and we don&apos;t use invasive tracking. Since you&apos;re in charge, you are free to export your data and credentials at any time.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-[30%]">
              <h4 className="text-sm font-bold text-[#8C8C90] uppercase tracking-wider">Is this sustainable?</h4>
            </div>
            <div className="md:w-[70%] text-left">
              <h3 className="oku-font-serif text-2xl text-black font-normal mb-2">We are member supported</h3>
              <p className="text-[#46474E] text-base leading-relaxed">
                We choose to charge our members directly for premium certificate custom designs and API extensions so that we profit when we make you happy instead of when we show you ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the team section */}
      <section id="team" className="max-w-5xl mx-auto px-6 pb-24 flex flex-col items-center text-center">
        <h2 className="oku-font-serif text-4xl md:text-5xl text-black font-normal leading-[1.1] mb-6">
          Meet the team
        </h2>
        <p className="text-[#46474E] text-lg leading-relaxed max-w-2xl mb-12">
          As three friends scattered throughout Europe, we were looking for a way to discover great tutorials and track our technical growth. Nothing cut the mustard, so we took the challenge on. We work smart and take pride in our craft.
        </p>
        
        {/* Team Avatars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-3xl mt-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[124px] h-[124px] rounded-full overflow-hidden shadow-xs border border-neutral-200 mb-4 select-none">
              <img src="/images/homepage/yav.png" alt="Yavor Punchev &amp; Fuji" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-lg text-black mb-1">Yavor Punchev &amp; Fuji</h4>
            <span className="text-sm text-[#8C8C90]">Sofia, Bulgaria</span>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[124px] h-[124px] rounded-full overflow-hidden shadow-xs border border-neutral-200 mb-4 select-none">
              <img src="/images/homepage/joe.png" alt="Joe Alcorn" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-lg text-black mb-1">Joe Alcorn</h4>
            <span className="text-sm text-[#8C8C90]">London, United Kingdom</span>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[124px] h-[124px] rounded-full overflow-hidden shadow-xs border border-neutral-200 mb-4 select-none">
              <img src="/images/homepage/aziz.png" alt="Aziz Firat" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-lg text-black mb-1">Aziz Firat</h4>
            <span className="text-sm text-[#8C8C90]">Oslo, Norway</span>
          </div>
        </div>
      </section>

      {/* Footer Block */}
      <footer className="relative bg-[#F6F6F6] pt-12 overflow-hidden border-t border-[#E8E8E9]">
        <Wave className="w-full h-auto text-[#FAF9F7] bg-[#F6F6F6] -mt-12" />

        {/* Floating Books - exact layout */}
        <figure className="absolute top-[140px] left-[14vw] animate-float-book-1 hidden md:block select-none pointer-events-none">
          <img src="/images/homepage/bookOne.png" width={92} height={105} alt="Book floating around" />
        </figure>
        <figure className="absolute bottom-[180px] left-[7vw] animate-float-book-2 hidden md:block select-none pointer-events-none">
          <img src="/images/homepage/bookTwo.png" width={110} height={120} alt="Book floating around" />
        </figure>
        <figure className="absolute top-[240px] right-[7vw] animate-float-book-3 hidden md:block select-none pointer-events-none">
          <img src="/images/homepage/bookThree.png" width={120} height={100} alt="Book floating around" />
        </figure>

        {/* CTA section inside footer */}
        <div className="max-w-[700px] mx-auto text-center py-20 px-6 relative z-10">
          <h2 className="oku-font-serif text-4xl md:text-5xl text-black font-normal mb-4">
            Ready to join us?
          </h2>
          <p className="text-[#46474E] text-lg max-w-[500px] mx-auto mb-8 leading-relaxed">
            Credify is the companion app for your learning. Become a member for free to track, rate &amp; review your favorite educational playlists with a community of others.
          </p>
          <Link href="/login">
            <button className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-neutral-800 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0">
              Create a free account
            </button>
          </Link>
        </div>

        {/* Bottom links and copyright */}
        <div className="max-w-5xl mx-auto px-6 py-12 relative border-t border-[#E8E8E9] flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Dog tail swinging fuji */}
          <div className="absolute bottom-2.5 right-[-150px] hidden xl:block select-none pointer-events-none w-[270px] h-[240px] overflow-hidden">
            <img 
              src="/images/homepage/fuji.png" 
              alt="Fuji tail wagging" 
              className="animate-tail-swing w-full h-full object-contain" 
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#46474E] font-medium text-sm z-10">
            <Link href="#features" className="hover:text-black transition-colors">Explore</Link>
            <Link href="#import" className="hover:text-black transition-colors">Integrations</Link>
            <Link href="#team" className="hover:text-black transition-colors">Team</Link>
            <Link href="https://twitter.com/credify" target="_blank" className="hover:text-black transition-colors">Twitter</Link>
            <Link href="mailto:support@credify.so" className="hover:text-black transition-colors">Contact</Link>
          </div>

          <div className="text-[#8C8C90] text-sm z-10">
            Copyright &copy; 2026 Credify. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
