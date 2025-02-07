"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img2.jpeg";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";

const Css = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of CSS!");
        setTimeout(() => setFeedback(""), 3000);
    }, []);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList([...commentList, comments]);
            setComments("");
            setFeedback("Comment submitted! Thank you!");
            setTimeout(() => setFeedback(""), 3000);
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white font-serif">
            <Navbar/>
            <section className="py-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-5xl font-extrabold mb-6 animate-bounce text-yellow-400">
                            CSS: The Styling Language 🌐
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            CSS (Cascading Style Sheets) is used for styling web pages, allowing you to design your content and layout with precision.
                        </p>
                        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core CSS Features</h2>
                        <ul className="list-disc ml-6 space-y-4 text-lg">
                            <li><strong>Selectors:</strong> Choose elements to style based on their class, ID, or type.</li>
                            <li><strong>Layout:</strong> Control layout with Flexbox and Grid.</li>
                            <li><strong>Colors:</strong> Set background, text, and border colors using classes.</li>
                            <li><strong>Fonts:</strong> Control typography and font styles.</li>
                            <li><strong>Animations:</strong> Create transitions and animations for dynamic effects.</li>
                        </ul>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="CSS"
                                src={img}
                                layout="responsive"
                                width={700}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* Practical CSS Examples */}
                <section className="py-8 ">
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4 text-center">Practical CSS Examples</h2>

                    {/* Flexbox Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">Flexbox Layout</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center">1</div>
                            <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center">2</div>
                            <div className="w-24 h-24 bg-green-500 text-white flex items-center justify-center">3</div>
                        </div>
                    </div>

                    {/* Grid Layout Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">Grid Layout</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-yellow-500 h-24 text-center text-white">1</div>
                            <div className="bg-orange-500 h-24 text-center text-white">2</div>
                            <div className="bg-pink-500 h-24 text-center text-white">3</div>
                            <div className="bg-teal-500 h-24 text-center text-white">4</div>
                            <div className="bg-indigo-500 h-24 text-center text-white">5</div>
                            <div className="bg-purple-500 h-24 text-center text-white">6</div>
                        </div>
                    </div>

                    {/* Gradient Background */}
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-8 text-center mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4 text-center">Background Gradient</h3>
                        <p className="text-lg text-gray-100">Use Tailwind utilities to create gradient backgrounds and text effects.</p>
                    </div>

                    {/* Animation Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">CSS Animation</h3>
                        <div className="relative w-full h-32 bg-transparent">
                            <div className="absolute top-0 left-0 bg-red-500 w-16 h-16 animate-move-box"></div>
                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes move-box {
                            0% { left: 0; }
                            100% { left: 90%; }
                        }

                        .animate-move-box {
                            animation: move-box 3s infinite;
                        }
                    `}</style>

                    {/* Typography Styles */}
                    <div className="bg-gray-800 py-8 mb-8 text-center">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Typography Styles</h3>
                        <p className="text-xl text-gray-300 mb-2">Regular text style with Tailwind text utilities.</p>
                        <p className="text-2xl font-semibold text-green-400">Bold, larger text with a green hue.</p>
                        <p className="text-sm text-gray-400 italic mt-2">Small italicized text for emphasis.</p>
                    </div>

                    {/* Responsive Layout Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">Responsive Layout</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-red-500 text-white p-6">Item 1</div>
                            <div className="bg-blue-500 text-white p-6">Item 2</div>
                            <div className="bg-green-500 text-white p-6">Item 3</div>
                        </div>
                    </div>

                    {/* Custom Border Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">Custom Border</h3>
                        <div className="p-6 border-4 border-blue-500 rounded-lg shadow-xl text-center bg-gray-700">
                            <p className="text-white">This is a box with a custom border and shadow effect.</p>
                        </div>
                    </div>

                    {/* Hover Effects Example */}
                    <div className="bg-gray-800 py-8 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">Hover Effects</h3>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md">
                                Hover Me 1
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md">
                                Hover Me 2
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md">
                                Hover Me 3
                            </button>
                        </div>
                    </div>
                </section>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/Css">
                        <button className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-transform duration-300 mb-6">
                            Documentation
                        </button>
                    </Link>
                </div>

                {/* Comments Section */}
                <div className="mt-16 bg-gray-800 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Comments</h2>
                    {feedback && (
                        <p className="text-green-400 mb-4 animate-pulse">{feedback}</p>
                    )}
                    <form
                        onSubmit={handleCommentSubmit}
                        className="flex flex-col space-y-4 mb-6"
                    >
                        <textarea
                            value={comments}
                            onChange={handleCommentChange}
                            placeholder="Add your comment here..."
                            className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black resize-none"
                            maxLength={200}
                            required
                        />
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-800">
                                {comments.length}/200
                            </span>
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-300"
                            >
                                Submit Comment
                            </button>
                        </div>
                    </form>
                    <div className="max-h-60 overflow-y-auto">
                        {commentList.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                                {commentList.map((comment, index) => (
                                    <li
                                        key={index}
                                        className="py-1 border-b border-gray-600"
                                    >
                                        {comment}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400">No comments yet.</p>
                        )}
                    </div>
                </div>
            </section>        </div>
    );
};

export default Css;
