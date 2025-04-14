'use client';

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function PhoneForm({ onSubmit, className, confirm_phone_form, error_phone_form }) {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState(null); // null, "success", "error"
  const [loading, setLoading] = useState(false);

  const handleCountryCodeChange = (e) => {
    // Keep the '+' and limit to reasonable country code length (1-4 digits)
    const inputValue = e.target.value;
    if (inputValue === '' || inputValue === '+') {
      setCountryCode('+');
    } else {
      // Ensure it starts with '+' and contains only digits after
      const formatted = '+' + inputValue.replace(/\D/g, '').slice(0, 4);
      setCountryCode(formatted);
    }
    
    // Reset status when user types again
    if (status !== null) {
      setStatus(null);
    }
  };

  const handlePhoneChange = (e) => {
    // Remove any non-digit characters
    const inputValue = e.target.value.replace(/\D/g, '');
    
    // Limit to 9 digits maximum
    const limitedValue = inputValue.slice(0, 9);
    
    setPhoneNumber(limitedValue);
    
    // Reset status when user types again
    if (status !== null) {
      setStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if both fields are filled
    if (!countryCode || !phoneNumber) {
      setStatus("error");
      return;
    }
    
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/meoazzqj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: fullPhoneNumber }),
      });

      if (response.ok) {
        setStatus("success");
        setCountryCode("");
        setPhoneNumber("");
        if (onSubmit) {
          onSubmit(fullPhoneNumber);
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
        className={`flex w-full md:w-80 md:max-w-[520px] items-center justify-between rounded-lg border border-[#AEAEAE] place-self-center sm:place-self-start ${className}`}
      >
        {/* Country code input with flag */}
        <div className="relative flex items-center">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          </div>
          <input
            type="text"
            className="appearance-none bg-transparent pl-4 py-3 text-black outline-none border-r border-[#AEAEAE] w-16"
            value={countryCode}
            onChange={handleCountryCodeChange}
            placeholder="+00"
            disabled={loading}
          />
        </div>

        {/* Phone number input */}
        <input
          type="tel"
          className="bg-transparent border-none text-black placeholder-[#AEAEAE] focus:outline-none flex-1 px-2"
          placeholder="(000)-000-0000"
          value={phoneNumber}
          onChange={handlePhoneChange}
          maxLength={9}
          disabled={loading}
        />

        {/* Submit button with icon */}
        <button
          type="submit"
          className={`py-3 px-2 bg-BgOrange hover:bg-[#8C4405] rounded-r-md transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          aria-label="Enviar número"
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
            {confirm_phone_form}
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 px-4 py-2 bg-red-100 text-red-800 rounded-md text-sm"
          >
            {error_phone_form}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhoneForm;