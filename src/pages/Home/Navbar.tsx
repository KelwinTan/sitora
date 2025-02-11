import { Component, useState } from "react";

export class NavBar extends Component {
  render() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
        <header className="bg-[#0A66C2] text-white p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">My Website</h1>{" "}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <nav
            className={`flex flex-col md:flex-row ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <a
              href="#hero"
              className="hover:text-blue-300 p-2"
              onClick={(e) => {
                e.preventDefault();
                const heroSection = document.getElementById("hero");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Hero
            </a>
            <a
              href="#about"
              className="hover:text-blue-300 p-2"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-blue-300 p-2"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 p-2"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </a>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
