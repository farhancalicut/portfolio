import { useState } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import project1a from "@/assets/project-1a.png";
import project1b from "@/assets/project-1b.png";
import project1c from "@/assets/project-1c.png";
import project2a from "@/assets/project-2a.png";
import project2b from "@/assets/project-2b.png";
import project3 from "@/assets/project-3.jpg"; // NSS
import project4 from "@/assets/project-4.png"; // Dust
import project5 from "@/assets/project-5.png"; // Reserva
import project6 from "@/assets/project-6.png"; // Beautynad

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Fortex Education Consultancy Platform",
      description: "A comprehensive education consultancy platform built with Next.js 14 and Firebase, designed to streamline the study abroad journey for students. Features include an interactive university finder, real-time consultation booking system, and a robust admin dashboard.",
      longDescription: "Fortex Education is a full-stack web application developed to modernize educational consultancy services. Built using Next.js 14 (App Router) and TypeScript, it provides a seamless interface for students to explore universities, book career counseling sessions, and access scholarship information. Key features include a high-performance UI with Framer Motion animations, a secure role-based admin panel for managing booking requests and testimonials, and dynamic content handling via Firebase Firestore. The platform ensures a premium user experience with a fully responsive layout modeled after native apps.",
      tags: ["Next.js 14", "TypeScript", "Firebase", "Tailwind CSS"],
      image: project1a,
      gallery: [project1a, project1b, project1c],
      link: "https://github.com/farhancalicut/fortexeducation.git",
      featured: true
    },
    {
      title: "PUSahityotsav",
      description: "Live Event Management System. I successfully hosted this application for a university cultural festival. It handled registrations and event coordination for hundreds of participants.",
      longDescription: "PUSahityotsav is a live event management system deployed for a university cultural festival. It streamlined the entire registration process, handled user data securely, and provided real-time updates on event schedules. The system successfully managed traffic from hundreds of participants, proving its reliability and scalability in a real-world scenario.",
      tags: ["React", "Node.js", "Hosted", "Real-world Usage"],
      image: project2a,
      gallery: [project2a, project2b],
      link: "https://github.com/farhancalicut/pusahityotsav-website.git",
      featured: true
    },
    {
      title: "PU NSS Connect",
      description: "Mobile application connecting NSS volunteers. Features real-time event updates and volunteer coordination tools.",
      longDescription: "PU NSS Connect is a cross-platform mobile application developed to bridge the communication gap between NSS volunteers. It features real-time notifications for events, a blood donor directory, and volunteer coordination tools. Built with React Native and Firebase, it offers a smooth, reliable experience on both Android and iOS devices.",
      tags: ["React Native", "Firebase", "Mobile"],
      image: project3,
      gallery: [project3],
      link: "https://github.com/farhancalicut/pu_blood_connect.git",
      featured: false
    },
    {
      title: "Intelligent Dust Detection & Hardware Monitoring",
      description: "Engineered a ML solution using Computer Vision to detect dust accumulation on hardware. Trained on a custom dataset (Clean/Moderate/Dusty) to generate preventive maintenance alerts.",
      longDescription: "This machine learning project utilizes Computer Vision techniques to monitor hardware health. By analyzing real-time video feeds, the system classifies dust accumulation levels into 'Clean', 'Moderate', or 'Dusty'. It provides automated alerts for preventive maintenance, significantly extending hardware lifespan and reducing failure rates. The model was trained on a custom-curated dataset to ensure high accuracy in diverse lighting conditions.",
      tags: ["Python", "Computer Vision", "ML", "Hardware"],
      image: project4,
      gallery: [project4],
      link: "https://github.com/farhancalicut/Intelligent-Dust-Detection-and-Hardware-Monitoring-System-Using-ML-and-CV.git",
      featured: false
    },
    {
      title: "Reserva Turf",
      description: "Online sports booking platform. Users can schedule slots for turf grounds with an intuitive booking interface.",
      longDescription: "Reserva Turf is a modern web application for booking sports facilities. Users can browse available slots, book them instantly, and manage their reservations. The platform features a dynamic calendar interface and real-time availability checking to prevent double bookings.",
      tags: ["Web App", "Booking System"],
      image: project5,
      gallery: [project5],
      link: "https://github.com/farhancalicut/reserva.git",
      featured: false
    },
    {
      title: "Beautynad",
      description: "Full-featured e-commerce platform for beauty products with shopping cart and user profiles.",
      longDescription: "Beautynad is a complete e-commerce solution featuring product catalogs, shopping cart functionality, and user account management. It demonstrates core e-commerce principles including state management, routing, and responsive design for a seamless shopping experience.",
      tags: ["E-commerce", "React"],
      image: project6,
      gallery: [project6],
      link: "https://github.com/farhancalicut/beautinad.git",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Real-world applications and academic projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap pr-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/20 border border-primary/20 text-white backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">{project.description}</p>
                <div className="flex gap-4 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 bg-secondary/50 hover:bg-secondary text-white border border-white/10"
                    onClick={() => setSelectedProject(project)}
                  >
                    View More <Eye className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Code <Github className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-white/10 text-foreground max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image Carousel */}
                  <div className="w-full relative rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProject.gallery.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                              <img
                                src={img}
                                alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-black/50 border-white/10 hover:bg-black/70" />
                      <CarouselNext className="right-2 bg-black/50 border-white/10 hover:bg-black/70" />
                    </Carousel>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/20 border border-primary/20 text-primary-foreground text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <DialogDescription className="text-lg text-foreground/90 leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </DialogDescription>

                    <div className="flex gap-4 pt-4">
                      <Button className="w-full md:w-auto" asChild>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                          View Source Code <Github className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
