import React from 'react';

export const Card = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={item.imageUrl} alt={item.title || item.role} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}/>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-[#541212] dark:text-[#EEEEEE]">{item.title || item.role}</h3>
            {item.company && <p className="text-md font-semibold text-[#468A9A] dark:text-sky-400 mb-2">{item.company}</p>}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period || item.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
        </div>
    </div>
);