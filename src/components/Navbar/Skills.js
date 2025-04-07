import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';

const categories = [
    {
        title: 'Frontend Technologies',
        skills: [
            { id: 1, name: 'JavaScript', icon: <SiJavascript color="#F7E02E" /> },
            { id: 2, name: 'React', icon: <FaReact color="#61DAFB" /> },
            { id: 30, name: 'Next.js', icon: <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js" className="w-6 h-6" /> },
            { id: 3, name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { id: 4, name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
            { id: 15, name: 'Tailwind CSS', icon: <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind CSS" className="w-6 h-6" /> },
            { id: 16, name: 'Bootstrap', icon: <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="Bootstrap" className="w-6 h-6" /> },
            { id: 17, name: 'Material-UI', icon: <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="Material-UI" className="w-6 h-6" /> },
        ],
    },
    {
        title: 'Backend Technologies',
        skills: [
            { id: 5, name: 'Node.js', icon: <FaNodeJs color="#8CC84B" /> },
            { id: 6, name: 'Express.js', icon: <SiExpress color="#000000" /> },
            { id: 7, name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { id: 8, name: 'MySQL', icon: <FaDatabase color="#00758F" /> },
            { id: 18, name: 'Firebase', icon: <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="Firebase" className="w-6 h-6" /> },
            { id: 19, name: 'PostgreSQL', icon: <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" className="w-6 h-6" /> },
            { id: 20, name: 'Spring Boot', icon: <img src="https://cdn.worldvectorlogo.com/logos/spring-3.svg" alt="Spring Boot" className="w-6 h-6" /> },
        ],
    },
    {
        title: 'Programming Languages',
        skills: [
            { id: 10, name: 'JavaScript', icon: <SiJavascript color="#F7E02E" /> },
            { id: 21, name: 'Java', icon: <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt="Java" className="w-6 h-6" /> },
        ],
    },
    {
        title: 'DevOps',
        skills: [
            { id: 11, name: 'Docker', icon: <FaDocker color="#2496ED" /> },
            { id: 28, name: 'Terraform', icon: <img src="https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" alt="Terraform" className="w-6 h-6" /> },
            { id: 29, name: 'AWS', icon: <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="w-6 h-6" /> },
            { id: 12, name: 'Git & GitHub', icon: <FaGithub color="#181717" /> },
            { id: 25, name: 'GitLab', icon: <img src="https://cdn.worldvectorlogo.com/logos/gitlab.svg" alt="GitLab" className="w-6 h-6" /> },
        ],
    },
    {
        title: 'Other Tools',
        skills: [
            { id: 23, name: 'IntelliJ IDEA', icon: <img src="https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg" alt="IntelliJ IDEA" className="w-6 h-6" /> },
            { id: 13, name: 'Postman', icon: <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="Postman" className="w-6 h-6" /> },
            { id: 14, name: 'VSCode', icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="VSCode" className="w-6 h-6" /> },
            { id: 24, name: 'Figma', icon: <img src="https://cdn.worldvectorlogo.com/logos/figma-icon.svg" alt="Figma" className="w-6 h-6" /> },
        ],
    },
];

export default function Skills() {
    return (
        <div className="mt-8 mx-auto p-4 md:p-6 lg:p-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-3">Skills</h1>
                <p className="text-lg text-gray-600">
                    Here are some of the technologies and tools that I have worked with. I am always looking to learn
                    new things and improve my skills.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {categories.map((category, index) => {
                    // Calculate height based on number of skills
                    const cardHeight = `${category.skills.length * 60}px`; // Adjust multiplier for desired height

                    return (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-md"
                            style={{ height: cardHeight }}
                        >
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill.id}
                                        className="flex items-center p-2 border-pink-200 rounded-md hover:bg-gray-200"
                                    >
                                        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-gray-700">{skill.name}</h3>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
