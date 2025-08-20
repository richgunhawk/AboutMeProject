import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';

export const HomePage = ({ portfolioData }) => (
    <div className="space-y-20">
        <AnimatedSection>
            <section className="text-center py-20">
                <h2 className="text-5xl md:text-6xl font-extrabold text-[#541212] dark:text-[#EEEEEE] mb-4">
                    Hi, I'm {portfolioData.name.split(' ')[0]}
                </h2>
                <p className="text-xl md:text-2xl text-[#468A9A] dark:text-sky-400 mb-8">{portfolioData.title}</p>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                    {portfolioData.summary}
                </p>
            </section>
        </AnimatedSection>
        
        <AnimatedSection>
            <section>
                <h3 className="text-4xl font-bold text-center mb-12">Featured Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.slice(0, 3).map((project, index) => (
                        <Card key={index} item={project} />
                    ))}
                </div>
            </section>
        </AnimatedSection>

        <AnimatedSection>
            <section>
                <h3 className="text-4xl font-bold text-center mb-12">My Experience</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.experiences.slice(0, 3).map((exp, index) => (
                        <Card key={index} item={exp} />
                    ))}
                </div>
            </section>
        </AnimatedSection>

        <AnimatedSection>
            <section className="text-center py-16 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Feel free to reach out!
                </p>
                <div className="flex justify-center items-center space-x-6">
                     <a href={`mailto:${portfolioData.contact.email}`} className="bg-[#541212] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
                        Email Me
                    </a>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#468A9A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
                        LinkedIn
                    </a>
                </div>
            </section>
        </AnimatedSection>
    </div>
);