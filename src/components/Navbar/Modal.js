import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ project, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleScroll = () => {
            onClose();
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
                role="document"
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 id="modal-title" className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                <p className="text-gray-700 mt-4">{project.description}</p>
                <div className="mt-4">
                    <ul className="flex flex-row flex-wrap space-x-2">
                        {project.technologies.map((tech, index) => (
                            <li
                                className="mb-1 mr-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                                key={index}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 flex space-x-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition duration-300"
                        aria-label="GitHub repository"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition duration-300"
                        aria-label="Live demo"
                    >
                        <FontAwesomeIcon icon={faDribbble} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
