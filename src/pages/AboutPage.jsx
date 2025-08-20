import React from 'react';
import { AnimatedSection } from '../components/animatedSection';
import { Download } from 'lucide-react';

export const AboutPage = ({ portfolioData }) => (
    <AnimatedSection>
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 flex justify-center">
                         <img 
                            src={portfolioData.profileImage} 
                            alt={portfolioData.name} 
                            className="rounded-full w-48 h-48 md:w-full md:h-auto object-cover border-4 border-[#468A9A] dark:border-sky-400"
                         />
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-lg mb-6">{portfolioData.summary}</p>
                        <h4 className="text-2xl font-bold mb-4 text-[#541212] dark:text-[#EEEEEE]">Education</h4>
                        <p className="font-semibold">{portfolioData.education.institution}</p>
                        <p>{portfolioData.education.degree} ({portfolioData.education.period})</p>
                        <p>GPA: {portfolioData.education.gpa}</p>
                        
                        <h4 className="text-2xl font-bold mt-6 mb-4 text-[#541212] dark:text-[#EEEEEE]">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.skills.map(skill => (
                                <span key={skill} className="bg-[#468A9A] text-white px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-8 text-center md:text-left">
                            <a 
                                href={portfolioData.cvUrl} 
                                download 
                                className="inline-flex items-center gap-2 bg-[#541212] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AnimatedSection>
);