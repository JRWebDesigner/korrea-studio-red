"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Award, 
  Users, 
  Lightbulb, 
  Palette, 
  Camera, 
  Settings,
  Menu,
  X
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Animaciones reutilizables
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.2 
    }
  }
};

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            KORREA STUDIO
          </Link>
          
          {/* Menú de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <Button 
              className="bg-white text-black hover:bg-gray-200 mr-3"
              size="sm"
            >
              Quote
            </Button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Botón cotizar escritorio */}
          <Button className="hidden md:flex bg-white text-black hover:bg-gray-200">
            Request Quote
          </Button>
        </div>
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/95 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            <motion.div 
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={slideUp}>
                <Link 
                  href="#services" 
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={slideUp}>
                <Link 
                  href="#projects" 
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div variants={slideUp}>
                <Link 
                  href="#about" 
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={slideUp}>
                <Link 
                  href="#contact" 
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={slideUp} className="pt-8">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ejemplo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            variants={slideUp}
          >
            From Concept to Completion
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mt-2"
              variants={slideUp}
            >
              We Bring Ideas to Life
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
            variants={slideUp}
          >
            We design and build bold, physical work that leaves a mark. From initial sketches to final pieces.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={slideUp}
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Specialized Services</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              We offer comprehensive solutions from initial concept to final production
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={scaleUp}>
              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors h-full">
                <CardContent className="p-8 text-center">
                  <Palette className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Creative Direction</h3>
                  <p className="text-gray-400">Conceptualization and development of creative ideas for unique projects</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleUp}>
              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors h-full">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Scenic Design</h3>
                  <p className="text-gray-400">Creation of sets, painted backgrounds and environments for productions</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleUp}>
              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors h-full">
                <CardContent className="p-8 text-center">
                  <Settings className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Fabrication</h3>
                  <p className="text-gray-400">
                    Production of props, installations and unique pieces with professional finishes
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleUp}>
              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors h-full">
                <CardContent className="p-8 text-center">
                  <Camera className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Stage Art</h3>
                  <p className="text-gray-400">
                    Creative installations for events, exhibitions and audiovisual productions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unique experiences that have made a difference in the industry
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                variants={scaleUp}
                whilehover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="bg-white border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&query=creative installation project ${i}`}
                      alt={`Project ${i}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <CardContent className="p-6 bg-gray-900">
                    <h3 className="text-xl font-bold mb-2 text-white">Creative Installation {i}</h3>
                    <Button variant="ghost" className="text-white hover:text-gray-300 p-0">
                      View details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <Badge className="mb-4 bg-black/30 border-black/20 text-black">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Experts in Creating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r bg-black/80">
                  Unique Experiences
                </span>
              </h2>
              <p className="text-xl text-black mb-8">
                Korrea Studio is a creative workshop based in London, run by artists passionate about design and fabrication. We design and build bold, physical work that leaves a mark. From initial sketches to final pieces, we take your vision and turn it into environments, objects, and experiences that demand attention.
              </p>

              <motion.div 
                className="grid sm:grid-cols-3 gap-8 mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <Award className="h-8 w-8 text-black mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-gray-400">Projects</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <Users className="h-8 w-8 text-black mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">30+</div>
                  <div className="text-gray-400">Clients</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={fadeIn}
                >
                  <Lightbulb className="h-8 w-8 text-black mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-gray-400">Years</div>
                </motion.div>
              </motion.div>

              <Button size="lg" className="bg-black text-white hover:bg-gray-400">
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/fondo-agencia.webp"
                alt="Korrea Studio Workspace"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative bg-[url('/conferences.webp')] bg-norepeat bg-cover bg-center">
        <div className="absolute w-full h-full bg-black/60" />
        <motion.div 
          className="relative z-20 container mx-auto px-4 lg:px-6 text-center py-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Ready to start?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Bring
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your Next Project to Life
            </motion.span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project and discover how we can transform your ideas into extraordinary experiences.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={slideUp}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={slideUp}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                Schedule Meeting
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">KORREA STUDIO</h3>
              <p className="text-gray-400 mb-4">
                Transforming ideas into striking physical experiences from concept to production.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Creative Direction</li>
                <li>Scenic Design</li>
                <li>Fabrication</li>
                <li>Stage Art</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Projects</li>
                <li>Process</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@korreastudio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>City, Country</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Korrea Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
