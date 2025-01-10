import React from 'react';

function About() {
    const photos = [
        'https://lh3.googleusercontent.com/AVX9GsvHMwrrpnwNLAbfM1uhbUvqdy1KyPVmUfUS5Keqe5C4Gsyq7Z9t7cpoux0cQfqclenE6JcflJQBIki1x3grOZ6TuXSPFvCb9IebYSIoO0y3Zss=w800-rw-e365-v1'
    ];

    return (
        <section className="bg-orange-200 rounded-xl m-5 mt-8 md:mx-28 md:rounded-3xl p-6 py-12">

            <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Kirtesh Admute
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mt-4 md:mt-6">
                        Software
                        <span className="bg-orange-500 p-1 md:p-2 rounded-3xl rounded-bl text-white ml-2">Developer</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700">
                        I'm a full-stack developer with experience in frontend, backend, DevOps, and cloud services.
                    </p>
                    <p className="mt-4 text-base md:text-lg text-gray-700">
                        Let's build something amazing together!
                    </p>
                    <div className="mt-8">
                        <a href="/contact" className="bg-black text-white font-semibold py-3 px-4 rounded-lg">
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 gap-4">
                        <img
                            src={photos[0]}
                            alt="Main Gallery"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
