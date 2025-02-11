import { Mail, Phone } from "lucide-react";
import React from "react";

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

interface ContactFormProps {
  contactInfo?: ContactInfo;
  onSubmit?: (data: { name: string; email: string; question: string }) => void;
}

const defaultContactInfo: ContactInfo = {
  email: "lw.kelwin@gmail.com",
  phone: "+62 813-3621-4840",
  linkedin: "abraham",
};

const ContactForm: React.FC<ContactFormProps> = ({
  contactInfo = defaultContactInfo,
  onSubmit = (data) => console.log("Form submitted:", data),
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      question: formData.get("question") as string,
    });
  };

  return (
    <div className="sm:p-10 my-auto bg-white">
      <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
        <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
          <div className="col-span-4 bg-white px-8 py-10 text-gray-800 md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
            <h2 className="mb-8 text-2xl font-black">Contact me</h2>
            <ul>
              <li className="mb-6 flex items-start text-left">
                <Mail className="shrink-0 mr-6 text-2xl text-gray-500" />
                <div>
                  <a
                    className="cursor-pointer font-serif text-base md:text-lg"
                    href={`mailto:${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                  <span className="block text-xs uppercase">email</span>
                </div>
              </li>
              <li className="my-6 flex items-center text-left">
                <Phone className="shrink-0 mr-6 text-2xl text-gray-500" />
                <div>
                  <a
                    className="cursor-pointer font-serif text-base md:text-lg"
                    href={contactInfo.phone}
                  >
                    {contactInfo.phone}
                  </a>
                  <span className="block text-xs uppercase">Mobile Phone</span>
                </div>
              </li>
              {/* <li className="my-6 flex items-center text-left">
                <Linkedin className="shrink-0 mr-6 text-2xl text-gray-500" />
                <div>
                  <p className="font-serif text-base md:text-lg">
                    {contactInfo.linkedin}
                  </p>
                  <span className="block text-xs uppercase">LinkedIn</span>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
            <h2 className="mb-8 text-2xl font-black">Get in touch</h2>
            <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
              Don't be shy to ask me a question.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-4">
                <input
                  className="col-span-1 bg-white w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  className="col-span-1 bg-white w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <textarea
                className="mb-10 bg-white w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows={6}
                placeholder="Question"
                name="question"
                required
              />
              <button
                type="submit"
                className="group flex cursor-pointer items-center rounded-xl bg-[var(--sitora-primary)] bg-none px-8 py-4 text-center font-semibold leading-tight text-white hover:bg-[var(--sitora-primary)] transition-colors"
              >
                Send
                <svg
                  className="group-hover:ml-8 ml-4 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
