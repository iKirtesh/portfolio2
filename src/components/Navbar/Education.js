import React from 'react';

const educationList = [
    {
        id: 1,
        institution: 'Savitribai Phule Pune University',
        degree: 'Bachelor of Science in Information Technology',
        graduationYear: '2025',
        description: 'Focused on software development and data structures.',
    },
    {
        id: 2,
        institution: 'PES Modern College of Arts, Science and Commerce, Pune',
        degree: 'Higher Secondary Certificate (HSC)',
        graduationYear: '2019',
        description: 'Specialized in Computer Science and Mathematics.',
    },
    {
        id: 3,
        institution: 'Ravindra High School, Bhoom',
        degree: 'Secondary School Certificate (SSC)',
        graduationYear: '2017',
        description: 'General education with a focus on Science and Mathematics.',
    },
];

export default function Education() {
    return (
        <div className=" mx-auto p-4  md:p-6 lg:p-8 bg-gradient-to-br from-green-400 to-indigo-600 rounded-lg opacity-95 ">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-100 mb-4">Education</h1>
                <p className="text-lg text-gray-300">
                    Here is a summary of my educational background and achievements.
                </p>
            </div>
            <div className="relative">
                <div className="absolute w-1 bg-white rounded h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
                {educationList.map((education, index) => (
                    <div
                        key={education.id}
                        className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    >
                        <div className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                            <div className=" bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg m-4 p-6 flex flex-col items-start space-y-4 border border-gray-200 border-opacity-30">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold text-gray-100">{education.institution}</h2>
                                    <p className="text-gray-200">{education.degree}</p>
                                </div>
                            </div>
                            <div className={`absolute w-4 h-4 bg-white opacity-90
                             rounded-full top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'md:right-0 md:-mr-2' : 'md:left-0 md:-ml-2'} hidden md:block`}>
                                <div className="absolute w-2 h-2 shadow opacity-100
                                 bg-gray-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
