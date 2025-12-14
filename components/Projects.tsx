import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
    const projects = [
        {
            "title": 'Skin Cancer Detection using CNN',
            "text": "A CNN-based system to classify skin lesion images with a simple web interface for image upload and result visualization.",
            "image": '/dummy.png',
        },
        {
            "title": 'My Movie List',
            "text": "A cross-platform mobile app using Flutter with a clean, responsive UI and core application logic.",
            "image": '/dummy.png',
        },
        {
            "title": 'React Dead Simple Stopwatch Hook',
            "text": "A simple and reusable React hook for creating a stopwatch.",
            "image": '/dummy.png',
        }
    ];

    return (
        <section className="w-full">
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                
                return (
                    <div 
                        key={index}
                        className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-16"
                    >
                        <div className={`w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative aspect-video w-full ${!isEven ? 'lg:order-2' : ''}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </motion.div>

                            {/* Text Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                                    {project.title}
                                </h2>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    {project.text}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;