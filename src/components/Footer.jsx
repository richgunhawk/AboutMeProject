import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export const Footer = ({ portfolioData }) => (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                    <Linkedin size={28} />
                </a>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                    <Github size={28} />
                </a>
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-sky-500 transition-colors">
                    <Mail size={28} />
                </a>
                <a href={`https://wa.me/${portfolioData.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                    <Phone size={28} />
                </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
        </div>
    </footer>
);