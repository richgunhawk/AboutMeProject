import React from 'react';
import { AnimatedSection } from '../components/animatedSection';
import { Card } from '../components/card';

export const ExperiencePage = ({ portfolioData }) => (
    <AnimatedSection>
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">My Experience Archive</h2>
            <div className="grid md:grid-cols-2 gap-10">
                {portfolioData.experiences.map((exp, index) => (
                    <Card key={index} item={exp} />
                ))}
            </div>
        </section>
    </AnimatedSection>
);