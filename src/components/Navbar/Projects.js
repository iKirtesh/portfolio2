import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Modal from './Modal'; // Assuming Modal component is defined in a separate file

const projects = [
    {
        id: 1,
        title: 'EEminent Hub for Professionals',
        description: '• Implemented a blogging feature, allowing users to share knowledge and insights through personalized blogs.\n' +
            '• Integrated a secure Google login and session management system using Firebase, ensuring seamless authentication.\n' +
            '• Designed an admin dashboard to manage user portfolios, blogs, and other platform activities effectively',
        technologies: ['NextJS', 'MongoDB', 'Firebase',],
        imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOUIMIzdUejRs81nO31R5TwbRRTb4kbOY9LZLXabr5PiYiIFL8pPxbTSy--QYt2s8nE9FEkDLYrTzG3C3od5fFmNZegd_-EZNFA3XyLzIVzjoM_fvpmgpUN44tmu3re7YuOmpcuxm24WS_dglvPvOYT=w1882-h851-s-no-gm?authuser=0',
        // githubUrl: 'https://github.com/username/e-commerce-platform',
        liveUrl: 'https://eminenthub.vercel.app/',
        category: 'Full Stack',
    },
    {
        id: 2,
        title: ' Club Management Platform',
        description: '• Developed a platform to manage clubs, events, and user engagement.\n' +
            '• Integrated secure Google login with Firebase and Razorpay for seamless event registrations, supporting both individual and\n' +
            '• team payments.\n' +
            '• Enabled role-based access, promoting users to members and tracking their membership journey.\n' +
            '• Built an admin panel for task delegation and streamlined collaboration with clear hierarchies.',
        technologies: ['React', 'Tailwind CSS', 'Firebase', 'Razorpay', 'Node.js', 'Express.js'],
        // imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF55aQtSTbT04LSraZJwoX81S8L_A7OFJXaA&s',
        // githubUrl: 'https://github.com/username/portfolio-website',
        // liveUrl: 'https://portfolio.example.com',
        category: 'Web App',
    },
    {
        id: 4,
        title: 'Club UI Design',
        description: 'A Club UI Design to organize events, manage members, and showcase club information.',
        technologies: ['Figma'],
        // imageUrl: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4088138/cover_image/retina_1708x683/cover-mobile-ux-design-best-practices-07b43207b46a9eac30bc54299d403fb4.png',
        // githubUrl: 'https://github.com/username/club-ui-design',
        // liveUrl: 'https://club-ui-design.example.com',
        category: 'UX/UI Design',
    }
];

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    // Get unique categories from projects
    const categories = useMemo(() => {
        const allCategories = projects.map(project => project.category);
        return ['All', ...new Set(allCategories)]; // Include 'All' and unique categories
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = useMemo(() => {
        return selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);
    }, [selectedCategory]);

    const buttonClasses = "px-2 py-2 rounded-xl text-sm font-semibold transition";

    return (
        <div className="mt-8 mx-auto p-4 md:p-6 lg:p-8 max-w-screen-xl">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Projects</h1>
                <p className="text-base md:text-lg text-gray-700 mb-8">
                    Here are some of the projects I've worked on. Feel free to explore and learn more about my work.
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                    <div className="border-gray-200 rounded-xl border-2 px-2 py-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${buttonClasses} ${selectedCategory === category ? 'bg-orange-400 text-white' : 'bg-transparent text-gray-600'}`}
                                onClick={() => handleCategoryChange(category)}
                                aria-label={`Filter by ${category}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative rounded-xl p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleProjectClick(project)}
                        aria-label={`View details for ${project.title}`}
                    >
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
                        <h2 className="text-xl font-semibold text-gray-900 mt-4">{project.title}</h2>
                        <p className="text-gray-700 mt-2">{project.description}</p>
                        <div className="mt-4">
                            <ul className="flex flex-wrap space-x-2">
                                {project.technologies.map((tech, index) => (
                                    <li className="mb-1 mr-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm" key={index}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && <MemoizedModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
}

// Memoizing the Modal component to prevent unnecessary re-renders
const MemoizedModal = React.memo(Modal);
