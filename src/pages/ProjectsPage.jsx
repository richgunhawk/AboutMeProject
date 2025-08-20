import React from 'react';
import { AnimatedSection } from '../components/animatedSection';
import { Card } from '../components/card';

export const ProjectsPage = ({ portfolioData }) => (
    <AnimatedSection>
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects Archive</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {portfolioData.projects.map((project, index) => (
                    <Card key={index} item={project} />
                ))}
            </div>
        </section>
    </AnimatedSection>
);