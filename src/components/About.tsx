import { GraduationCap, Code2, Rocket, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import profilePortrait from "@/assets/farhan.png";

const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "Education", value: "MCA Graduate" },
    { icon: Code2, label: "Focus", value: "Full-Stack Dev" },
    { icon: Rocket, label: "Experience", value: "Deployed 3+ Apps" },
    { icon: Briefcase, label: "Status", value: "Seeking Internship" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src={profilePortrait}
                alt="Mohammed Farhan"
                className="relative rounded-full w-full aspect-square object-cover border-2 border-white/5 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a recent MCA graduate from Pondicherry University with a strong foundation in computer science application.
              While I have explored Machine Learning during my academic projects, my true passion lies in **building real-world applications**.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I recently developed and hosted a **live event management application** that was successfully used in a real event.
              This experience taught me the value of efficient coding and delivering reliable software under deadlines.
              I am now looking for an internship to apply my skills and grow as a Full Stack Developer.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'Python', 'SQL', 'Git'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium hover:bg-secondary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all"
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-sm text-muted-foreground mb-1">{item.label}</h3>
              <p className="font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
