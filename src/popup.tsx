import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Popup = () => {
  const [emails, setEmails] = useState<string[]>([
    "test@example.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com",
    "hello@world.com"
  ]);
  const handleCopyAll = () => {
    navigator.clipboard.writeText(emails.join("\n"));
  };

  return (
    <div className="flex flex-col relative w-[300px] h-[400px] bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="mb-4 border-b pb-2 p-4">
        <h2 className="text-lg font-bold text-gray-700 text-center">
          Emails Found on This Page
        </h2>
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-y-auto max-h-[250px] px-4">
        {emails.length > 0 ? (
          emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <span className="text-gray-600">{email}</span>
              <button
                className="text-sm text-blue-500 hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText(email);
                }}
              >
                Copy
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No emails found.</p>
        )}
      </div>

      <div className=" w-full p-4">
        {emails.length > 0 && (
          <div className="mt-4">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={handleCopyAll}
            >
              Copy All Emails
            </button>
          </div>
        )}
        <footer className="text-center mt-4 w-full justify-center text-gray-400 text-sm flex items-center">
          Built with ❤️ |&nbsp;
          <p
            className="hover:underline cursor-pointer"
            onClick={() => window.open("https://orrin.vercel.app", "_blank")}
          >
            orrin
          </p>
        </footer>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
