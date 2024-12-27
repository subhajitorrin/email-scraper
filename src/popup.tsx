import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MdContentCopy } from "react-icons/md";

const Popup = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [toggleAllCopied, setToggleAllCopied] = useState(false);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(emails.join("\n"));
    setToggleAllCopied(true);
  };

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "setEmails") {
        setEmails(message.emails);
      }
    });
  }, []);

  const extractEmails = (): void => {
    const htmlContent: string = document.documentElement.outerHTML;
    const emailRegex: RegExp =
      /\b[A-Za-z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|icloud\.com|protonmail\.com|zoho\.com|aol\.com|yandex\.com|mail\.com|gmx\.com|automark\.io)\b/g;

    let emails: string[] = htmlContent.match(emailRegex) || [];
    emails = Array.from(new Set(emails));
    emails = emails.filter(
      (email: string) => !email.includes("%") && !email.includes("+")
    );
    emails=emails.filter((email: string) => !email.startsWith("x22"));

    chrome.runtime.sendMessage({ action: "setEmails", emails });
  };

  useEffect(() => {
    const handleRunContentScript = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const tabId = tabs[0].id;
          if (typeof tabId === "number") {
            chrome.scripting.executeScript({
              target: { tabId },
              func: extractEmails
            });
          } else {
            console.error("Tab ID is undefined");
          }
        } else {
          console.error("No active tab found");
        }
      });
    };
    handleRunContentScript();
  }, []);

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
              <span className="text-gray-600 text-sm font-medium">{email}</span>
              <button
                className="text-sm text-blue-500 hover:text-blue-600"
                onClick={() => {
                  navigator.clipboard.writeText(email);
                }}
              >
                <MdContentCopy className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No emails found.</p>
        )}
      </div>

      <div className="w-full p-4">
        {emails.length > 0 && (
          <div className="mt-4">
            <button
              className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600"
              onClick={handleCopyAll}
            >
              {toggleAllCopied ? "Copied All" : "Copy All Emails"}
            </button>
          </div>
        )}
        <footer className="text-center mt-4 w-full justify-center text-gray-400 text-sm flex items-center">
          Built with ❤️ |&nbsp;
          <p
            className="hover:underline cursor-pointer"
            onClick={() => window.open("https://x.com/subhajitorrin", "_blank")}
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
