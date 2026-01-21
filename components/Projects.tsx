'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useMemo } from "react";

import Autoplay from "embla-carousel-autoplay";
import { Badge } from "./ui/badge";
import Bus from '@/public/projects/bus.svg';
import Cafe from '@/public/projects/cafe.svg';
import Desk from '@/public/projects/desk.svg';
import Image from "next/image";
import ParkingMeter from '@/public/projects/parking-meter.svg';
import RoadClosed from '@/public/projects/road-closed.svg';
import Truck from '@/public/projects/truck.svg';
import { getImagePath } from "@/lib/getImagePath";
import { motion } from "framer-motion";

// Move static data outside component to prevent re-creation on every render
const projects = [
  {
    title: "Nspace",
    text: "An office resouce management application for hybrid workspaces, featuring desk and room booking using office layout, visitor management, QR code check in available in Web, iOS, Android and Microsoft Teams.",
    tech: ["TypeScript", "React", "React Native", "Leaflet", "Microsoft SSO"],
    image: {
      svg: Desk,
      size: '20rem', 
      alt: "A Desk with a person with a Mac and a lamp",
    },
  },
  {
    title: "TravelIQ",
    text: "Travel-IQ enables public agencies to efficiently report and manage travel-impacting events like roadwork, accidents, and special events. It communicates these updates to regional stakeholders and the public via web and mobile apps, third-party travel apps, social media, and personalized alerts.",
    tech: ["C# .NET", "Javascript", "Google Maps API", "OpenStreetMaps"],
    image: { svg: Truck, size: '25rem', alt: "A side view of a truck" },
  },
  {
    title: "HotSpot Digital Solutions",
    text: "From digital permits to real-time parking availability to DMV-integrated citation management, HotSpot offers a comprehensive digital solution for all parking management needs.",
    tech: ["React Native", "CakePHP", "mySQL", "Stripe"],
    image: { svg: ParkingMeter, size: '20rem', alt: "A parking" },
  },
  {
    title: "Skin Cancer Detection using CNN",
    text: "A CNN-based system to classify skin lesion images with a simple web interface for image upload and result visualization.",
    tech: ["HTML", "CSS", "Django", "Python", "Tesnorflow"],
    images: ["/projects/CNN1.png", "/projects/CNN2.png", "/projects/CNN3.png"],
    aspect: "960/546",
  },
  {
    title: "My Movie List",
    text: "A cross-platform mobile app using Flutter with a clean, responsive UI and core application logic.",
    tech: ["Dart", "Flutter", "Firebase"],
    images: [
      "/projects/MML1.png",
      "/projects/MML2.png",
      "/projects/MML3.png",
      "/projects/MML4.png",
    ],
    aspect: "270/540",
  },
  {
    title: "React Dead Simple Stopwatch Hook",
    text: "A simple and reusable React hook for creating a stopwatch.",
    tech: ["TypeScript", "React", "NPM"],
    images: ["/projects/NPM1.png"],
    aspect: "1000/640",
  },
  {
    title: "PA Alert Now",
    text: "PA Alert Now is a closure management system for roads in Pennsylvania, allowing users to report, manage, and view road closures",
    tech: ["React", "Google Maps", "Snyk", "Vitest", "reCAPTCHA v3"],
    image: {
      svg: RoadClosed,
      size: '20rem', alt: "A road close obstruction",
    },
  },
  {
    title: "LunchApp",
    text: "LunchApp provides a food and desk managment to minimize food wastage in offices and manages time slots for space management",
    tech: ["Next.js", "Prisma", "SSR", "PostgreSQL"],
    image: {
      svg: Cafe,
      size: '25rem', alt: "A food counter with a person standing over it",
    },
  },
  {
    title: "Event Management App",
    text: "Provides an interface for organizers to count the status of attendees and allow attendees to generate SOS alerts in case of emergency",
    tech: ["Next.js", "Prisma", "SSR", "PostgreSQL"],
    image: { svg: Bus, size: '30rem', alt: "A sideways bus" },
  },
];

const Projects: React.FC = () => {
  // Memoize autoplay plugin once
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    [],
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-thin">
            Projects
          </h1>
        </header>
      </div>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        const SvgIcon = project.image?.svg;
        return (
          <div
            key={index}
            className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 mb-16 last:mb-0"
          >
            <div
              className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`${!isEven ? "lg:order-2" : ""}`}
                style={{ willChange: "opacity, transform" }}
              >
                {project.images && project.aspect && (
                  <Carousel
                    className="w-full px-16"
                    opts={{ loop: true }}
                    plugins={[autoplayPlugin]}
                    style={
                      project.aspect === "270/540"
                        ? { maxWidth: "calc(270px + 8rem)", margin: "0 auto" }
                        : {}
                    }
                  >
                    <CarouselContent>
                      {project.images.map((img, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div
                            className="relative mx-auto w-full flex items-center justify-center"
                            style={{ aspectRatio: `${project.aspect}` }}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={getImagePath(img)}
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
                )}
                {SvgIcon && (
                  <SvgIcon style={{stroke: 'var(--foreground)', fill: 'black', height: project.image?.size, width: project.image?.size}} strokeWidth={1}/>
                )}
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                  {project.text}
                </p>
                <p className="text-xl">
                {project.tech.map(tech => <Badge key={tech} variant={"default"} className="mx-2 rounded-none">{tech}</Badge>)}
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