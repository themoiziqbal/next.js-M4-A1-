"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img6.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const Python = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of Python!");
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
                            Python: The Power of Programming 🐍
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            Python is a versatile and easy-to-learn programming language that is widely used in fields like web development, data science, and automation.
                        </p>
                        
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core Python Features</h2>
                            <ul className="list-disc ml-6 space-y-4 text-lg">
                                <li>
                                    <strong>Syntax:</strong> Python uses readable syntax that allows developers to write less code.
                                </li>
                                <li>
                                    <strong>Libraries & Frameworks:</strong> Python has a wide range of libraries and frameworks like Flask, Django, Pandas, and NumPy.
                                </li>
                                <li>
                                    <strong>Object-Oriented:</strong> Python supports object-oriented programming principles, making code reusable and scalable.
                                </li>
                                <li>
                                    <strong>Cross-Platform:</strong> Python can run on different platforms, including Windows, macOS, and Linux.
                                </li>
                                <li>
                                    <strong>Extensive Community:</strong> Python has a large community that contributes to libraries, documentation, and tutorials.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Python"
                                src={img}
                                layout="responsive"
                                width={800}
                                height={900}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* Python Enhancements Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400 px-10">Python Enhancements</h2>
                    <ul className="list-disc ml-6 space-y-4 text-lg px-10">
                        <li>
                            <strong>Dynamic Typing:</strong> Python dynamic typing allows for more flexible code.
                        </li>
                        <li>
                            <strong>List Comprehensions:</strong> Python offers concise ways to create and manipulate lists.
                        </li>
                        <li>
                            <strong>Memory Management:</strong> Python handles memory allocation and garbage collection automatically.
                        </li>
                        <li>
                            <strong>Multithreading:</strong> Python supports running multiple threads for parallel execution.
                        </li>
                        <li>
                            <strong>Extensive Documentation:</strong> Python documentation is comprehensive and user-friendly.
                        </li>
                    </ul>
                </div>

                {/* Practical Examples */}
                <div className="mt-16 bg-gray-900 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Practical Python Examples</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">1. Basic Python Program</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`print("Hello, World!")`}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">2. Simple Python Function</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://www.python.org/doc/">
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

export default Python;
