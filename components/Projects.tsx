'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
    const projects = [
        {
            "title": 'Skin Cancer Detection using CNN',
            "text": "A CNN-based system to classify skin lesion images with a simple web interface for image upload and result visualization.",
            "images": ['/projects/CNN1.png', '/projects/CNN2.png', '/projects/CNN3.png'],
            "aspect": "960/546",
        },
        {
            "title": 'My Movie List',
            "text": "A cross-platform mobile app using Flutter with a clean, responsive UI and core application logic.",
            "images": ['/projects/MML1.png', '/projects/MML2.png', '/projects/MML3.png', '/projects/MML4.png'],
            "aspect": "270/540",
        },
        {
            "title": 'React Dead Simple Stopwatch Hook',
            "text": "A simple and reusable React hook for creating a stopwatch.",
            "images": ['/projects/NPM1.png'],
            "aspect": "1000/640"
        }
    ];

    return (
        <section className="py-20">
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                
                return (
                    <div 
                        key={index}
                        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 mb-16 last:mb-0"
                    >
                        <div className={`w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`${!isEven ? 'lg:order-2' : ''}`}
                            >
                                <Carousel 
                                    className="w-full px-16" 
                                    opts={{ loop: true }} 
                                    plugins={[
                                        Autoplay({
                                            delay: 3000,
                                            stopOnInteraction: true,
                                            stopOnMouseEnter: true,
                                        })
                                    ]}
                                    style={project.aspect === "270/540" ? { maxWidth: "calc(270px + 8rem)", margin: "0 auto" } : {}}
                                >
                                    <CarouselContent>
                                        {project.images.map((img, imgIndex) => (
                                            <CarouselItem key={imgIndex}>
                                                <div className="relative mx-auto w-full flex items-center justify-center" style={{ aspectRatio: `${project.aspect}` }}>
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={img}
                                                            alt={`${project.title} - ${imgIndex + 1}`}
                                                            fill
                                                            className="object-contain border-foreground border-2"
                                                            sizes="(max-width: 768px) 100vw, 960px"
                                                        />
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {project.images.length > 1 && (
                                        <>
                                            <CarouselPrevious className="rounded-none" />
                                            <CarouselNext className="rounded-none" />
                                        </>
                                    )}
                                </Carousel>
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