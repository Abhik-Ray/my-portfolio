"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useMemo, useState } from 'react';

import Image from 'next/image';
import { getImagePath } from '@/lib/getImagePath';

const artworks = [
    { id: 1, src: '/Art/cyberpunk-bedroom.png', title: 'Cyberpunk Bedroom', category: 'Environment' },
    { id: 2, src: '/Art/assassins_creed_neon.png', title: 'Assassin\'s Creed Neon', category: 'Wallpaper' },
    { id: 3, src: '/Art/rainbow6_neon.png', title: 'Rainbow 6 Neon', category: 'Wallpaper' },
    { id: 4, src: '/Art/skyrim_neon.png', title: 'Skyrim Neon', category: 'Wallpaper' },
    { id: 5, src: '/Art/oblivion_neon.png', title: 'Oblivion Neon', category: 'Wallpaper' },
    { id: 6, src: '/Art/Altair!!.png', title: 'Altair', category: 'Character' },
    { id: 7, src: '/Art/altair4k.png', title: 'Altair 4K', category: 'Character' },
    { id: 8, src: '/Art/altairknives.png', title: 'Altair Knives', category: 'Character' },
    { id: 9, src: '/Art/TieFighter.png', title: 'Tie Fighter', category: 'Model' },
    { id: 10, src: '/Art/UberCar.png', title: 'Uber Car', category: 'Model' },
    { id: 11, src: '/Art/UberCarReplica.png', title: 'Uber Car', category: 'Model' },
    { id: 12, src: '/Art/bonfire.png', title: 'Bonfire', category: 'Wallpaper' },
    { id: 13, src: '/Art/zelda.png', title: 'Zelda', category: 'Wallpaper' },
    { id: 14, src: '/Art/Tai.png', title: 'Tai', category: 'Model' },
    { id: 15, src: '/Art/Render1-200-1080.png', title: 'Swedish Stuga', category: 'Environment' },
];

const categories = ['All', 'Environment', 'Wallpaper', 'Character', 'Model'];

const ArtworkCard = memo(({ artwork, index, onClick }: { artwork: typeof artworks[0]; index: number; onClick: () => void }) => (
    <div
        onClick={onClick}
        className="group cursor-pointer relative overflow-hidden"
    >
        {/* Neon Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground transition-all duration-300 z-10 pointer-events-none group-hover:shadow-[0_0_30px_hsl(var(--foreground)/0.6),inset_0_0_30px_hsl(var(--foreground)/0.1)]"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground/50 z-10 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground/50 z-10 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground/50 z-10 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground/50 z-10 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>

        <div className="relative aspect-[4/3] bg-black/50">
            <Image
                src={getImagePath(artwork.src)}
                alt={artwork.title}
                fill
                loading="lazy"
                className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10">
            <p className="text-foreground/80 font-mono text-xs uppercase tracking-widest mb-1">
                {artwork.category}
            </p>
            <h3 className="text-foreground font-bold text-lg">{artwork.title}</h3>
        </div>
    </div>
));

ArtworkCard.displayName = 'ArtworkCard';

const Art: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>('All');

    const filteredArtworks = useMemo(
        () => filter === 'All' ? artworks : artworks.filter(art => art.category === filter),
        [filter]
    );

    const selectedArtwork = useMemo(
        () => artworks.find(art => art.id === selectedId),
        [selectedId]
    );

    const selectedIndex = useMemo(
        () => filteredArtworks.findIndex(art => art.id === selectedId),
        [filteredArtworks, selectedId]
    );

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex > 0) {
            setSelectedId(filteredArtworks[selectedIndex - 1].id);
        }
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex < filteredArtworks.length - 1) {
            setSelectedId(filteredArtworks[selectedIndex + 1].id);
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 relative">
            {/* Cyberpunk Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
                        BLENDER SHOWCASE
                    </h2>
                    <div className="h-1 w-full bg-foreground shadow-[0_0_20px_hsl(var(--foreground)/0.5)]"></div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 mt-8"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider ${
                                filter === category
                                    ? 'border-foreground bg-foreground/20 text-foreground shadow-[0_0_15px_hsl(var(--foreground)/0.5)]'
                                    : 'border-foreground/30 text-foreground/70 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_10px_hsl(var(--foreground)/0.3)]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Art Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((artwork, index) => (
                    <motion.div
                        key={artwork.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                        viewport={{ once: true, margin: "100px" }}
                    >
                        <ArtworkCard 
                            artwork={artwork} 
                            index={index}
                            onClick={() => setSelectedId(artwork.id)}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Modal for expanded view */}
            <AnimatePresence mode="wait">
                {selectedId && selectedArtwork && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 z-50"
                            onClick={() => setSelectedId(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-8 md:inset-16 z-50 flex items-center justify-center pointer-events-none"
                        >
                            <div className="relative max-w-6xl w-full h-full pointer-events-auto">
                                {/* Glowing Border */}
                                <div className="absolute inset-0 border-4 border-foreground shadow-[0_0_50px_hsl(var(--foreground)/0.8)]"></div>
                                
                                <div className="relative w-full h-full">
                                    <Image
                                        src={getImagePath(selectedArtwork.src)}
                                        alt={selectedArtwork.title}
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        priority
                                    />
                                </div>

                                {/* Close Button */}
                                <button
                                    className="absolute -top-6 -right-6 w-16 h-16 bg-foreground border-2 border-foreground text-background font-bold text-4xl hover:scale-110 transition-transform duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedId(null);
                                    }}
                                >
                                    ×
                                </button>

                                {/* Navigation Buttons */}
                                {selectedIndex > 0 && (
                                    <button
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-foreground/90 border-2 border-foreground text-background font-bold text-3xl hover:scale-110 transition-transform duration-200 shadow-[0_0_20px_hsl(var(--foreground)/0.5)]"
                                        onClick={goToPrevious}
                                    >
                                        ‹
                                    </button>
                                )}
                                {selectedIndex < filteredArtworks.length - 1 && (
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-foreground/90 border-2 border-foreground text-background font-bold text-3xl hover:scale-110 transition-transform duration-200 shadow-[0_0_20px_hsl(var(--foreground)/0.5)]"
                                        onClick={goToNext}
                                    >
                                        ›
                                    </button>
                                )}

                                {/* Title Bar */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/80 border-t-2 border-foreground">
                                    <p className="text-foreground/80 font-mono text-sm uppercase tracking-widest mb-2">
                                        {selectedArtwork.category}
                                    </p>
                                    <h3 className="text-foreground font-bold text-2xl">
                                        {selectedArtwork.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


        </section>
    );
};

export default Art;