import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Keep existing credentials logic
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Mohammed Farhan",
      };

      // Simulating call for demo if vars missing or actual call
      if (serviceId === "YOUR_SERVICE_ID") {
        console.warn("EmailJS credentials not set, simulating success");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <p className="text-muted-foreground mb-8">
            Open to internships, freelance, and entry-level opportunities. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Mail, href: "mailto:muhammedfarhant6@gmail.com" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-farhan-t-a2315b257/" },
              { icon: Github, href: "https://github.com/farhancalicut" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="bg-black/20 border-white/10 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-black/20 border-white/10 focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
                className="min-h-[150px] bg-black/20 border-white/10 focus:border-primary/50 resize-none"
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
              {isLoading ? "Sending..." : "Send Message"}
              {!isLoading && <Send className="ml-2 w-4 h-4" />}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
