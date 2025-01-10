import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };
    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //
    //     // Automatically set subject from the message field
    //     const subject = formData.message.split(' ').slice(0, 5).join(' ');
    //     // const sendEmail = httpsCallable(functions, 'sendEmail');
    //
    //     try {
    //         // const result = await sendEmail({ ...formData, subject });
    //         if (result.data.success) {
    //             setSubmissionSuccess(true);
    //         } else {
    //             setSubmissionSuccess(false);
    //         }
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //         setSubmissionSuccess(false);
    //     } finally {
    //         setIsSubmitting(false);
    //         setFormData({ email: '', subject: '', message: '' });
    //     }
    // };

    return (
        <section className="bg-gradient-to-r from-indigo-200 to-indigo-200 rounded-xl m-5 md:m-8 p-4 py-12 shadow-lg">
            <div className="container mx-auto px-4 md:px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 text-center">
                    <div className="md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Drop me a message</h2>
                        <p className="text-md md:text-lg text-gray-700 mb-6">
                            Have a question or want to work together? Feel free to send me a message using the form below.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg ">
                        <form  className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@company.com"
                                    className="block w-full px-4 py-3 bg-indigo-50 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message here..."
                                    rows="3"
                                    className="block w-full px-4 py-3 bg-indigo-50 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 4V1l-4 4 4 4V6c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11z" />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                            {submissionSuccess !== null && (
                                <div className={`mt-4 text-center text-sm ${submissionSuccess ? 'text-green-600' : 'text-red-600'}`}>
                                    {submissionSuccess ? 'Thank you! Your message has been sent successfully.' : 'Oops! Something went wrong. Please try again.'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
