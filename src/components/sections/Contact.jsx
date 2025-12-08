import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //   const serviceId = import.meta.env.VITE_SERVICE_ID;
  //   const templateId = import.meta.env.VITE_TEMPLATE_ID;
  //   const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-pink-200 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white transition focus:outline-none focus:border-pink-300 focus:bg-pink-500/5"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white transition focus:outline-none focus:border-pink-300 focus:bg-pink-500/5"
              placeholder="example@email.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white transition focus:outline-none focus:border-pink-300 focus:bg-pink-500/5"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.1)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
