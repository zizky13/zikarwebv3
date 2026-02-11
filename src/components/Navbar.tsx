import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('zikar');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [textColor, setTextColor] = useState<'white' | 'black'>('black');
    const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
    const navRef = useRef<HTMLUListElement>(null);

    const menuItems = [
        { id: 'zikar', label: 'Zikar Nurizky', href: '#zikar' },
        { id: 'highlights', label: 'Highlights', href: '#about' },
        { id: 'ios', label: 'iOS', href: '#iOS' },
        { id: 'web', label: 'Web', href: '#web' },
        { id: 'pm', label: 'PM', href: '#pm' },
        { id: 'contact', label: 'Contact Me', href: '#contact' }
    ];

    // Section ID to text color mapping
    const sectionColors: { [key: string]: 'white' | 'black' } = {
        'zikar': 'black',
        'about': 'black',
        'iOS': 'white',
        'web': 'black',
        'pm': 'black',
        'contact': 'black',
    };

    const updateIndicatorPosition = () => {
        const selectedElement = itemRefs.current[selectedItem];
        const navElement = navRef.current;
        if (selectedElement && navElement) {
            const navRect = navElement.getBoundingClientRect();
            const itemRect = selectedElement.getBoundingClientRect();
            
            setIndicatorStyle({ 
                left: itemRect.left - navRect.left,
                width: itemRect.width
            });
        }
    };

    useEffect(() => {
        // Update on selection change
        updateIndicatorPosition();
        
        // Update on window resize
        const handleResize = () => {
            updateIndicatorPosition();
        };
        
        window.addEventListener('resize', handleResize);
        
        // Initial update with slight delay to ensure DOM is ready
        const timer = setTimeout(updateIndicatorPosition, 100);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [selectedItem]);

    // Track scroll position and update selected item
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is at center of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    console.log('Section in view:', sectionId, 'Color:', sectionColors[sectionId]); // Debug log
                    // Map section IDs to menu item IDs
                    const menuItemId = menuItems.find(item => item.href === `#${sectionId}`)?.id;
                    if (menuItemId) {
                        setSelectedItem(menuItemId);
                    }
                    // Update text color based on section
                    setTextColor(sectionColors[sectionId] || 'black');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        menuItems.forEach((item) => {
            const sectionId = item.href.substring(1); // Remove '#' from href
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="w-full rounded-full bg-transparent py-4 px-6 ">
            <div className="flex items-center justify-center max-w-7xl mx-auto ">
                <ul ref={navRef} className="flex items-center gap-8 relative">
                    {/* Liquid morphing background indicator */}
                    <motion.div
                        className="absolute top-0 h-full rounded-full -z-10"
                        initial={false}
                        animate={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 0.8
                        }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                        }}
                    />

                    {menuItems.map((item) => (
                        <motion.li
                            key={item.id}
                            ref={(el) => {
                                itemRefs.current[item.id] = el;
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedItem(item.id);
                                        
                                        // Update text color when clicking
                                        const sectionId = item.href.substring(1);
                                        setTextColor(sectionColors[sectionId] || 'black');
                                        
                                        // Smooth scroll to section
                                        const section = document.querySelector(item.href);
                                        if (section) {
                                            section.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }
                                    }}
                                    className={`px-4 py-2 relative z-10 transition-colors cursor-pointer block ${
                                        selectedItem === item.id 
                                            ? `font-[SF-Pro] ${textColor === 'white' ? 'text-white' : 'text-black'} font-medium` 
                                            : `font-[SF-Pro] ${textColor === 'white' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`
                                    }`}
                                    initial={{ opacity: 0.7 }}
                                    animate={{ 
                                        opacity: selectedItem === item.id ? 1 : 0.7,
                                        y: selectedItem === item.id ? -2 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.label}
                                </motion.a>
                            </AnimatePresence>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;