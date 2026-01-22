import { Code2, Palette, Database, Server, Boxes, Terminal, Layers, Sparkles, Flame, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", icon: Layers, color: "text-blue-400" },
    { name: "JavaScript", icon: Sparkles, color: "text-yellow-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
    { name: "HTML & CSS", icon: Code2, color: "text-orange-500" },
    { name: "Python", icon: Terminal, color: "text-blue-300" },
    { name: "MySQL", icon: Database, color: "text-indigo-400" },
    { name: "React Native", icon: Boxes, color: "text-purple-400" },
    { name: "Django", icon: Server, color: "text-green-600" },
    { name: "Firebase", icon: Flame, color: "text-orange-500" },
    { name: "REST APIs", icon: Globe, color: "text-blue-500" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to build efficient and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors cursor-default"
            >
              <skill.icon className={`w-12 h-12 ${skill.color}`} strokeWidth={1.5} />
              <span className="font-medium text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
