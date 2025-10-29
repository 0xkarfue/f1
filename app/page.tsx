"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Music, Users, Sparkles, Clock, MapPin, Zap } from "lucide-react"

export default function AfterPartyPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleBuyPass = () => {
    window.open("https://instagram.com/direct/t/nemendra_20a/", "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AFTER
          </div>
          <Button
            onClick={handleBuyPass}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 font-bold px-6 py-2 rounded-full text-sm shadow-lg shadow-purple-500/50"
          >
            Buy Pass
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=1200&fit=crop"
            alt="After party event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold text-sm tracking-widest uppercase">
              ✨ Exclusive Event
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-balance leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              The After
            </span>
            <br />
            <span className="text-white">Party</span>
          </h1>

          <p className="text-lg sm:text-2xl text-white/80 mb-8 text-balance font-light leading-relaxed">
            One last unforgettable night. An exclusive after-party experience for the farewell celebration. Limited
            spots. Unlimited vibes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={handleBuyPass}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 font-bold px-8 py-6 rounded-full text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-transform"
            >
              Secure Your Pass
            </Button>
            <Button
              variant="outline"
              className="border-2 border-purple-400/50 text-white hover:bg-purple-500/10 font-bold px-8 py-6 rounded-full text-base sm:text-lg w-full sm:w-auto bg-transparent"
            >
              Details
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-balance">Why You Can't Miss This</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Music,
                title: "Premium Sound",
                description: "Curated playlist and professional sound system for the ultimate vibe",
              },
              {
                icon: Users,
                title: "Exclusive Crowd",
                description: "Only the best people. Handpicked guests for an unforgettable experience",
              },
              {
                icon: Sparkles,
                title: "Special Surprises",
                description: "Unexpected moments, performances, and memories you'll never forget",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Date & Time */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/60 text-sm uppercase tracking-widest mb-2 font-bold">Date & Time</h3>
                  <p className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                    TBA
                  </p>
                  <p className="text-white/50 text-sm mt-2">Check back soon for the official date</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/60 text-sm uppercase tracking-widest mb-2 font-bold">Location</h3>
                  <p className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                    Secret Venue
                  </p>
                  <p className="text-white/50 text-sm mt-2">Revealed to pass holders only</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 border border-purple-500/30">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-purple-400" />
              What's Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Premium Entry Access",
                "Exclusive Venue Access",
                "Special Surprises & Performances",
                "Premium Vibes & Atmosphere",
                "Unforgettable Memories",
                "VIP Treatment",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-balance">The Vibe</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop"
                alt="Party atmosphere"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold">Electric Energy</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop"
                alt="Dance floor"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold">Non-Stop Dancing</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop"
                alt="Crowd celebration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold">Unforgettable Moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-r from-purple-900/30 via-black to-cyan-900/30 border-y border-purple-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-balance">Ready for the Night of Your Life?</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 text-balance">
            Limited spots available. Secure yours now before they're gone.
          </p>
          <Button
            onClick={handleBuyPass}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 font-bold px-10 py-7 rounded-full text-lg shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-transform"
          >
            DM for Your Pass
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-black/80 border-t border-purple-500/20 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-4 text-sm">See you at the after party. This is going to be legendary.</p>
          <p className="text-white/40 text-xs">© 2025 The After Party. All vibes reserved.</p>
        </div>
      </footer>
    </div>
  )
}
