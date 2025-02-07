"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img4.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const ReactPage = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of React!");
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
                            React: A Library for Building User Interfaces ⚛️
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            React is a JavaScript library for building user interfaces. It lets you create reusable components to build dynamic and efficient web applications.
                        </p>

                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core React Features</h2>
                            <ul className="list-disc ml-6 space-y-4 text-lg">
                                <li>
                                    <strong>Components:</strong> React lets you build encapsulated components that manage their own state.
                                </li>
                                <li>
                                    <strong>Virtual DOM:</strong> React uses a virtual DOM to optimize rendering performance.
                                </li>
                                <li>
                                    <strong>JSX:</strong> JSX allows you to write HTML-like syntax in JavaScript for defining UI components.
                                </li>
                                <li>
                                    <strong>Hooks:</strong> React hooks like <code>useState</code> and <code>useEffect</code> enable functional components to manage state and lifecycle methods.
                                </li>
                                <li>
                                    <strong>State Management:</strong> React components can manage their own state, and you can also use Context API or external libraries like Redux for global state.
                                </li>
                                <li>
                                    <strong>Event Handling:</strong> React offers a declarative approach to handling user inputs, such as clicks and form submissions.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="React"
                                src={img}
                                layout="responsive"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* React Features Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400 px-10">React Features</h2>
                    <ul className="list-disc ml-6 space-y-4 text-lg px-10">
                        <li>
                            <strong>Declarative:</strong> React makes it easy to design interactive UIs by declaratively describing the state of the app.
                        </li>
                        <li>
                            <strong>Component-Based:</strong> Build complex UIs from small, reusable pieces of code.
                        </li>
                        <li>
                            <strong>Unidirectional Data Flow:</strong> React one-way data flow makes it easier to manage and debug applications.
                        </li>
                        <li>
                            <strong>React Router:</strong> React Router allows for navigation between pages in a single-page application (SPA).
                        </li>
                    </ul>
                </div>

                {/* Practical React Examples */}
                <div className="mt-16 bg-gray-900 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Practical React Examples</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">1. Basic Component</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`import React from "react";

function Welcome() {
    return <h1>Hello, React!</h1>;
}

export default Welcome;`}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">2. Using State Hook</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://reactjs.org/docs/getting-started.html">
                        <button className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-transform duration-300 mb-6">
                            React Documentation
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

export default ReactPage;
