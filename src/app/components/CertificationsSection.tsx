import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Java Programming Certification",
      issuer: "Online Platform",
      description:
        "Advanced Java programming concepts and best practices",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/verify/XWTECPDQ9B5E?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Online Platform",
      description:
        "Full-stack web development with modern frameworks",
      certificateUrl:
        "https://prodigyinfotech.dev/verify?cin=PIT/JUN24/16701",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Python for Data Science, AI and Development",
      issuer: "Online Platform",
      description:
        "Python basic, app design, and optimization techniques",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/verify/VB2MNR3XNX7A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 flex flex-col"
              >
                <div
                  className={`p-3 bg-gradient-to-br ${cert.gradient} rounded-lg w-fit mb-4`}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl text-gray-100 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                  {cert.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/20 hover:bg-white/10 text-gray-300 w-full"
                  onClick={() =>
                    window.open(cert.certificateUrl, "_blank")
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}