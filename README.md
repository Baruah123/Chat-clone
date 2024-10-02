<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Chat-Box - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        code {
            background-color: #eee;
            padding: 5px;
            border-radius: 5px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chat-Box</h1>
        <p>Chat-Box is a dynamic chat platform built using React, integrated with the Gemini AI API to provide intelligent responses. It offers a seamless chat experience with real-time AI-powered interactions.</p>

        <h2>Features</h2>
        <ul>
            <li>Real-time Messaging: Communicate with the AI instantly through a user-friendly interface.</li>
            <li>Gemini AI Integration: Powered by Gemini AI for intelligent and adaptive responses.</li>
            <li>Responsive Design: Optimized for both desktop and mobile use.</li>
            <li>React Framework: Modern, fast, and efficient.</li>
        </ul>

        <h3>Screenshots</h3>
        <img src="assets/images/chat-box-home.png" alt="Chat-Box Home Page">
        <img src="assets/images/chat-box-chat.png" alt="Chat-Box Chat Screen">

        <h2>Installation</h2>
        <p>Follow the steps below to run Chat-Box locally.</p>

        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (version 14.x or later)</li>
            <li>NPM or Yarn</li>
            <li>A valid Gemini AI API key</li>
        </ul>

        <h3>Clone the Repository</h3>
        <pre><code>git clone https://github.com/yourusername/chat-box.git
cd chat-box</code></pre>

        <h3>Install Dependencies</h3>
        <p>Using NPM:</p>
        <pre><code>npm install</code></pre>
        <p>Or using Yarn:</p>
        <pre><code>yarn install</code></pre>

        <h3>Set up Environment Variables</h3>
        <p>Create a <code>.env</code> file in the root directory and add your Gemini AI API key:</p>
        <pre><code>REACT_APP_GEMINI_API_KEY=your-gemini-api-key</code></pre>

        <h3>Start the Application</h3>
        <p>Using NPM:</p>
        <pre><code>npm start</code></pre>
        <p>Or using Yarn:</p>
        <pre><code>yarn start</code></pre>

        <p>Your app should now be running on <a href="http://localhost:3000">http://localhost:3000</a>.</p>

        <h2>Usage</h2>
        <ol>
            <li>Launch the application in your browser.</li>
            <li>Start typing messages to interact with the AI.</li>
            <li>Receive intelligent responses powered by Gemini AI.</li>
        </ol>

        <h2>Contributing</h2>
        <p>Feel free to submit issues or pull requests to improve the platform.</p>

        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="./LICENSE">LICENSE</a> file for more details.</p>
    </div>
</body>
</html>
