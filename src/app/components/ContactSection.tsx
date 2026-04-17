import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7390066551",
      href: "tel:+917390066551",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Kishanmaurya8473@gmail.com",
      href: "mailto:Kishanmaurya8473@gmail.com",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kishanmauryaniet",
      href: "https://linkedin.com/in/kishanmauryaniet",
      gradient: "from-sky-600 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "KISHAN840",
      href: "https://github.com/KISHAN840",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-4 group"
              >
                <div className={`p-3 bg-gradient-to-br ${contact.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                  <p className="text-gray-200">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 text-center"
          >
            <h3 className="text-2xl text-gray-100 mb-4">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with talented individuals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8"
              onClick={() => window.location.href = "mailto:Kishanmaurya8473@gmail.com"}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-20 text-center text-gray-500 border-t border-white/10 pt-8"
      >
        <p>© 2026 Kishan Maurya. Built with passion and modern technologies.</p>
      </motion.div>
    </section>
  );
}
