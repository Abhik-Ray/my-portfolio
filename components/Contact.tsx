"use client";

import { forwardRef, useState } from "react";

import { motion } from "framer-motion";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Create mailto link
    const mailtoLink = `mailto:abhik.raya01@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    
    // Open mail client in new window
    window.open(mailtoLink, '_blank');
    
    // Update status
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ subject: "", message: "" });
      }, 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-primary text-sm font-mono mb-2">
            {">"} INITIALIZE_CONNECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-mono mb-2">
            CONTACT.EXE
          </h2>
          <div className="h-0.5 w-32 bg-primary relative">
            <motion.div
              className="absolute h-full bg-yellow-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </motion.div>

        {/* Terminal-style container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Corner brackets */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

          {/* Main content */}
          <div className="bg-black border border-primary p-8 md:p-12 relative overflow-hidden">
            {/* Scanline effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-primary opacity-30"
              animate={{ y: [0, 600] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="space-y-6">
                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-primary text-sm font-mono mb-2"
                  >
                    {">"} SUBJECT_LINE:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-primary text-primary px-3 py-2 font-mono focus:outline-none focus:border-yellow-400 focus:text-yellow-400 transition-colors placeholder:text-gray-600"
                    placeholder="Enter subject..."
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-primary text-sm font-mono mb-2"
                  >
                    {">"} MESSAGE_BUFFER:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-2 border-primary text-primary px-3 py-2 font-mono focus:outline-none focus:border-yellow-400 focus:text-yellow-400 transition-colors resize-none placeholder:text-gray-600"
                    placeholder="Input transmission data..."
                  />
                </div>

                {/* Submit button */}
                <div className="flex items-center gap-4">
                  <motion.button
                    type="submit"
                    disabled={status !== "idle"}
                    whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                    className="relative px-8 py-3 border-2 border-primary text-primary font-mono font-bold overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Button hover effect */}
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      {status === "idle" && "[SEND_TRANSMISSION]"}
                      {status === "sending" && "[TRANSMITTING...]"}
                      {status === "sent" && "[TRANSMISSION_COMPLETE]"}
                    </span>
                  </motion.button>

                  {status === "sent" && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-yellow-400 font-mono text-sm"
                    >
                      ✓ DATA_RECEIVED
                    </motion.span>
                  )}
                </div>
              </div>
            </form>

            {/* Bottom status bar */}
            <div className="mt-8 pt-4 border-t border-primary border-opacity-30 flex justify-between items-center text-xs font-mono">
              <div className="text-gray-600">
                STATUS: <span className="text-primary">ONLINE</span>
              </div>
              <div className="text-gray-600">
                PROTOCOL: <span className="text-yellow-400">HTTPS/2.0</span>
              </div>
              <div className="text-gray-600">
                ENCRYPTION: <span className="text-primary">ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono"
        >
          <div className="border border-primary border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">DIRECT_LINE</div>
            <div className="text-primary text-sm">abhik.raya01@gmail.com</div>
          </div>
          <div className="border border-primary border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">LOCATION</div>
            <div className="text-yellow-400 text-sm">KOLKATA | HYDERBAD</div>
          </div>
          <div className="border border-primary border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">RESPONSE_TIME</div>
            <div className="text-primary text-sm">{"<24H"}</div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Abhik-Ray"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-mono font-bold overflow-hidden group"
          >
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <svg className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">[GITHUB]</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abhik-ray01/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-mono font-bold overflow-hidden group"
          >
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <svg className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">[LINKEDIN]</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
