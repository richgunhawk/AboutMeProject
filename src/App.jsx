import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { portfolioData } from './data/portfolioData';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [activePage, setActivePage] = useState('Home');

    useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    const renderPage = () => {
        switch (activePage) {
            case 'Home':
                return <HomePage portfolioData={portfolioData} />;
            case 'My Projects':
                return <ProjectsPage portfolioData={portfolioData} />;
            case 'My Experience':
                return <ExperiencePage portfolioData={portfolioData} />;
            case 'About':
                return <AboutPage portfolioData={portfolioData} />;
            default:
                return <HomePage portfolioData={portfolioData} />;
        }
    }

    return (
        <div className={`font-sans bg-[#EEEEEE] dark:bg-[#0F0E0E] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500`}>
            <Header 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
                activePage={activePage} 
                setActivePage={setActivePage}
                portfolioData={portfolioData}
            />
            <main className="container mx-auto px-6 py-8">
                {renderPage()}
            </main>
            <Footer portfolioData={portfolioData} />
        </div>
    );
}

export default App;