import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case "name":
        return /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(value);
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "message":
        return value.length >= 20;
      default:
        return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);
    setErrors({ ...errors, [name]: !isValid });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 border-2 rounded-lg bg-[#01251F] border-[#F9A825]">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Primera fila: Nombre y Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full sm:w-1/2 px-4 py-2 rounded focus:outline-none bg-[#2C3E3A] text-[#F4F4F4] ${
              errors.name ? "border-2 border-red-500" : "border-2 border-[#F9A825]"
            }`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full sm:w-1/2 px-4 py-2 rounded focus:outline-none bg-[#2C3E3A] text-[#F4F4F4] ${
              errors.email ? "border-2 border-red-500" : "border-2 border-[#F9A825]"
            }`}
            required
          />
        </div>

        {/* Segunda fila: Mensaje */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full h-32 px-4 py-2 rounded focus:outline-none bg-[#2C3E3A] text-[#F4F4F4] ${
            errors.message ? "border-2 border-red-500" : "border-2 border-[#F9A825]"
          }`}
          required
        />

        {/* Botón Enviar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded hover:opacity-90 bg-[#F9A825] text-[#01251F]"
          >
            CONTACT ME
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
