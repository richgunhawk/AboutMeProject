import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header = ({ darkMode, toggleDarkMode, activePage, setActivePage, portfolioData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['Home', 'My Projects', 'My Experience', 'About'];

    const linkClasses = (page) => 
        `cursor-pointer transition-colors duration-300 ${
            activePage === page 
                ? 'text-sky-500 dark:text-sky-400' 
                : 'hover:text-sky-500 dark:hover:text-sky-400'
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0F0E0E]/80 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#541212] dark:text-[#EEEEEE]">
                    {portfolioData.name}
                </h1>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(page => (
                        <a key={page} onClick={() => setActivePage(page)} className={linkClasses(page)}>
                            {page}
                        </a>
                    ))}
                    <button onClick={toggleDarkMode} className="focus:outline-none">
                        {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                    </button>
                </nav>
                <div className="md:hidden flex items-center">
                     <button onClick={toggleDarkMode} className="focus:outline-none mr-4">
                        {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-[#0F0E0E] py-4">
                    <nav className="flex flex-col items-center space-y-4">
                       {navLinks.map(page => (
                            <a key={page} onClick={() => {setActivePage(page); setIsMenuOpen(false);}} className={linkClasses(page)}>
                                {page}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};