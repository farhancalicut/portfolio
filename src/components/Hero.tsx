import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-md">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">Muhammed Farhan</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
            <span className="text-foreground">Web & Mobile Developer</span> | React • React Native • Django
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            Passionate about building efficient web solutions.
            I transform ideas into reality using modern technologies.
            Focused on learning, growing, and delivering value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[160px] h-12 rounded-full shadow-lg shadow-primary/25">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] h-12 rounded-full border-white/10 hover:bg-white/5">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] h-12 rounded-full border-white/10 hover:bg-white/5">
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Download Resume (PDF) <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <motion.div
            className="flex items-center justify-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://github.com/farhancalicut" target="_blank" className="hover:text-primary transition-colors p-2"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/muhammed-farhan-t-a2315b257/" target="_blank" className="hover:text-primary transition-colors p-2"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:muhammedfarhant6@gmail.com" className="hover:text-primary transition-colors p-2"><Mail className="w-6 h-6" /></a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
