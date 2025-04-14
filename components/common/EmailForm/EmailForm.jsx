'use client';

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function EmailForm({ onSubmit, className, confirm_email_form, error_email_form }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null, "success", "error"
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset status when user types again
    if (status !== null) {
      setStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/myzeppgq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        if (onSubmit) {
          onSubmit(email);
        }
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className={`flex w-full mt-5 md:w-80 md:max-w-[520px] items-center justify-between rounded-lg border border-[#AEAEAE] place-self-center sm:place-self-start ${className}`}
      >
        {/* Email input */}
        <input
          type="email"
          className="bg-transparent px-5 border-none text-black placeholder-[#AEAEAE] focus:outline-none flex-1"
          placeholder="your.email@example.com"
          value={email}
          onChange={handleEmailChange}
          required
          disabled={loading}
        />

        {/* Submit button with icon */}
        <button
          type="submit"
          className={`py-3 px-2 bg-BgOrange hover:bg-[#8C4405] rounded-r-md transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          aria-label="Submit email"
          disabled={loading}
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <MdKeyboardArrowRight className="text-white" size={24} />
          )}
        </button>
      </form>

      {/* Status Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm"
          >
            {confirm_email_form}
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 px-4 py-2 bg-red-100 text-red-800 rounded-md text-sm"
          >
            {error_email_form}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EmailForm;