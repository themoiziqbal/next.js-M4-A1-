"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img5.jpeg"; 
import Navbar from "../../components/Navbar/Navbar";

const NextJs = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of Next.js!");
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
                            Next.js: The React Framework 🌐
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            Next.js is a React-based framework for building server-side rendered and statically generated websites. It provides great performance and seamless developer experience.
                        </p>
                        
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core Next.js Features</h2>
                            <ul className="list-disc ml-6 space-y-4 text-lg">
                                <li>
                                    <strong>File-based Routing:</strong> Pages are created based on the file system structure in the pages directory.
                                </li>
                                <li>
                                    <strong>Static Site Generation (SSG):</strong> Pre-render pages at build time for faster performance.
                                </li>
                                <li>
                                    <strong>Server-side Rendering (SSR):</strong> Pre-render pages on each request for dynamic content.
                                </li>
                                <li>
                                    <strong>API Routes:</strong> Build API endpoints within the app using the pages/api directory.
                                </li>
                                <li>
                                    <strong>Image Optimization:</strong> Automatically optimizes images for faster load times.
                                </li>
                                <li>
                                    <strong>Automatic Code Splitting:</strong> Each page only loads the necessary JavaScript for that page.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Next.js"
                                src={img}
                                layout="responsive"
                                width={800}
                                height={900}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* Next.js Features Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400 px-10">Next.js Features</h2>
                    <ul className="list-disc ml-6 space-y-4 text-lg px-10">
                        <li>
                            <strong>File-based Routing:</strong> No need for a router configuration, files in the pages directory automatically create routes.
                        </li>
                        <li>
                            <strong>Static Site Generation (SSG):</strong> Pre-generate pages at build time for faster delivery.
                        </li>
                        <li>
                            <strong>Server-side Rendering (SSR):</strong> Generate pages at request time for dynamic data.
                        </li>
                        <li>
                            <strong>API Routes:</strong> Easily create serverless functions within your app.
                        </li>
                        <li>
                            <strong>Image Optimization:</strong> Automatically optimize images for different screen sizes and resolutions.
                        </li>
                    </ul>
                </div>

                {/* Practical Examples */}
                <div className="mt-16 bg-gray-900 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Practical Next.js Examples</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">1. Basic Next.js Page</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`// pages/index.tsx
import React from "react";

const HomePage = () => {
  return <h1>Welcome to Next.js!</h1>;
};

export default HomePage;`}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">2. Creating an API Route</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Hello, Next.js!" });
};

export default handler;`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://nextjs.org/docs">
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
            </section>
        </div>
    );
};

export default NextJs;
