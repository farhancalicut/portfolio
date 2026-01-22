import { Globe, Smartphone, Code2, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and production-ready web applications using React and Tailwind CSS, with a strong focus on clean UI and performance.",
      skills: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: Code2,
      title: "Backend Development",
      description: "Building robust server-side logic and APIs using Django and Python. Experience with Firebase and MySQL for efficient data management.",
      skills: ["Python", "MySQL", "REST APIs", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Developing cross-platform mobile applications using React Native. Focused on creating smooth, native-like user experiences for Android and iOS.",
      skills: ["Mobile UI", "Cross-platform", "User Experience"]
    },
    {
      icon: Wrench,
      title: "Problem Solving",
      description: "Solving complex technical challenges through efficient debugging and logical thinking. Committed to writing clean, maintainable code.",
      skills: ["Debugging", "Testing", "Git", "Code Review"]
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 spotlight-effect relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My development capabilities and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group animate-fade-in relative overflow-hidden cursor-pointer border border-white/10 hover:border-white/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[hsl(var(--gradient-purple))] via-[hsl(var(--gradient-blue-purple))] to-[hsl(var(--gradient-light-blue))] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue-purple))] flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 glow-effect">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors">{service.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/70 group-hover:border-[hsl(var(--gradient-purple))] group-hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 text-center relative overflow-hidden rounded-3xl p-12 lg:p-16"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 backdrop-blur-3xl" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Collaborate?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I'm eager to bring my skills in full-stack development and real-world application building to your team.
              Always ready to learn, adapt, and deliver.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Let's Build Something Amazing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
