"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img3.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const Javascript = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of JavaScript!");
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
                            JavaScript: Bringing the Web to Life ⚡
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            JavaScript is the scripting language that enables dynamic content and interactivity on websites. It can manipulate HTML and CSS to create engaging user experiences.
                        </p>
                        
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core JavaScript Features</h2>
                            <ul className="list-disc ml-6 space-y-4 text-lg">
                                <li>
                                    <strong>Variables & Data Types:</strong> Store values using <code>let</code>, <code>const</code>, and <code>var</code>.
                                </li>
                                <li>
                                    <strong>Functions:</strong> Create reusable blocks of code to perform tasks using <code>function</code> syntax.
                                </li>
                                <li>
                                    <strong>DOM Manipulation:</strong> Interact with the HTML structure using JavaScript to dynamically update the page content.
                                </li>
                                <li>
                                    <strong>Events:</strong> Respond to user interactions like clicks, keypresses, and hover actions with event listeners.
                                </li>
                                <li>
                                    <strong>Asynchronous Programming:</strong> Handle asynchronous operations using <code>setTimeout</code>, <code>setInterval</code>, and Promises.
                                </li>
                                <li>
                                    <strong>APIs:</strong> Access external data and services via APIs to enhance your applications.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="JavaScript"
                                src={img}
                                layout="responsive"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* JavaScript Enhancements Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400 px-10">JavaScript Enhancements</h2>
                    <ul className="list-disc ml-6 space-y-4 text-lg px-10">
                        <li>
                            <strong>ES6+ Features:</strong> Modern JavaScript includes features like arrow functions, classes, template literals, and destructuring.
                        </li>
                        <li>
                            <strong>Frameworks & Libraries:</strong> JavaScript has powerful libraries and frameworks like React, Angular, and Vue to build complex applications.
                        </li>
                        <li>
                            <strong>Async/Await:</strong> Simplify working with asynchronous code using <code>async</code> and <code>await</code>.
                        </li>
                        <li>
                            <strong>Modules:</strong> Use JavaScript modules to organize your code into reusable chunks.
                        </li>
                    </ul>
                </div>

                {/* Practical Examples */}
                <div className="mt-16 bg-gray-900 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Practical JavaScript Examples</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">1. Simple JavaScript Function</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`function greet() {
    alert("Hello, world!");
}

greet();`}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">2. DOM Manipulation</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`document.getElementById("myButton").onclick = function() {
    alert("Button clicked!");
};`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
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

export default Javascript;
