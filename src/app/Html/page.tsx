"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/image/img.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const Html = () => {
    const [comments, setComments] = useState("");
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setFeedback("Welcome to the world of HTML!");
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
                            HTML: The Foundation of the Web 🌐
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            HTML (HyperText Markup Language) is the standard language for creating web pages. It defines the structure and layout, serving as the skeleton of the web.
                        </p>
                        
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Core HTML Features</h2>
                            <ul className="list-disc ml-6 space-y-4 text-lg">
                                <li>
                                    <strong>Tags & Elements:</strong> Use predefined tags to structure content (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;img&gt;</code>).
                                </li>
                                <li>
                                    <strong>Media Embedding:</strong> Add multimedia with <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, and <code>&lt;audio&gt;</code> tags.
                                </li>
                                <li>
                                    <strong>Hyperlinks:</strong> Navigate between pages using <code>&lt;a href= ... &gt;</code>.
                                </li>
                                <li>
                                    <strong>Forms:</strong> Collect user inputs using <code>&lt;form&gt;</code> with fields like <code>&lt;input&gt;</code> and <code>&lt;textarea&gt;</code>.
                                </li>
                                <li>
                                    <strong>Tables:</strong> Organize data using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code>.
                                </li>
                                <li>
                                    <strong>Semantic Tags:</strong> Improve SEO and accessibility with tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;article&gt;</code>.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="HTML"
                                src={img}
                                layout="responsive"
                                width={800}
                                height={900}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>

                {/* HTML5 Enhancements Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400 px-10">HTML5 Enhancements</h2>
                    <ul className="list-disc ml-6 space-y-4 text-lg px-10">
                        <li>
                            <strong>Canvas:</strong> Enables dynamic graphics and animations with the <code>&lt;canvas&gt;</code> tag.
                        </li>
                        <li>
                            <strong>Audio & Video:</strong> Embed multimedia without plugins using <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>.
                        </li>
                        <li>
                            <strong>Local Storage:</strong> Store data in the browser using <code>localStorage</code> and <code>sessionStorage</code>.
                        </li>
                        <li>
                            <strong>Geolocation:</strong> Access user location with the <code>navigator.geolocation</code> API.
                        </li>
                        <li>
                            <strong>Responsive Design:</strong> Use the <code>&lt;meta name= viewport&gt;</code> tag for better mobile experiences.
                        </li>
                    </ul>
                </div>

                {/* Practical Examples */}
                <div className="mt-16 bg-gray-900 py-8 px-6 lg:px-16 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">Practical HTML Examples</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">1. Simple Webpage Structure</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">2. Embedding an Image</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                                {`<img src="image.jpg" alt="A beautiful image" width="600" height="400">`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-8 flex justify-center">
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
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

export default Html;
