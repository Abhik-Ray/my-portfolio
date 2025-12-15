"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-cyan-400 text-sm font-mono mb-2">
            {">"} INITIALIZE_CONNECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-mono mb-2">
            CONTACT.EXE
          </h2>
          <div className="h-[2px] w-32 bg-cyan-400 relative">
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
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

          {/* Main content */}
          <div className="bg-black border border-cyan-400 p-8 md:p-12 relative overflow-hidden">
            {/* Scanline effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-30"
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
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cyan-400 text-sm font-mono mb-2"
                  >
                    {">"} NAME_INPUT:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-cyan-400 text-yellow-400 px-3 py-2 font-mono focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-gray-600"
                    placeholder="Enter designation..."
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-cyan-400 text-sm font-mono mb-2"
                  >
                    {">"} EMAIL_ADDRESS:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-cyan-400 text-yellow-400 px-3 py-2 font-mono focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-gray-600"
                    placeholder="Enter network_id..."
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-cyan-400 text-sm font-mono mb-2"
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
                    className="w-full bg-transparent border-2 border-cyan-400 text-yellow-400 px-3 py-2 font-mono focus:outline-none focus:border-yellow-400 transition-colors resize-none placeholder:text-gray-600"
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
                    className="relative px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-bold overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Button hover effect */}
                    <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
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
            <div className="mt-8 pt-4 border-t border-cyan-400 border-opacity-30 flex justify-between items-center text-xs font-mono">
              <div className="text-gray-600">
                STATUS: <span className="text-cyan-400">ONLINE</span>
              </div>
              <div className="text-gray-600">
                PROTOCOL: <span className="text-yellow-400">HTTPS/2.0</span>
              </div>
              <div className="text-gray-600">
                ENCRYPTION: <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono"
        >
          <div className="border border-cyan-400 border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">DIRECT_LINE</div>
            <div className="text-cyan-400 text-sm">contact@email.com</div>
          </div>
          <div className="border border-cyan-400 border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">LOCATION</div>
            <div className="text-yellow-400 text-sm">SECTOR_7</div>
          </div>
          <div className="border border-cyan-400 border-opacity-30 p-4">
            <div className="text-gray-600 text-xs mb-1">RESPONSE_TIME</div>
            <div className="text-cyan-400 text-sm">{"<24H"}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
