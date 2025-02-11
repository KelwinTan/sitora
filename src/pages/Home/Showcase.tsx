import { ArrowRight } from "lucide-react";

const Showcase = () => {
  const showcaseItems = [
    {
      title: "Modern & Elegant",
      category: "LOVESEAT",
      description: "Premium collection for modern brands",
      image: "/api/placeholder/800/500",
      type: "FEATURED",
    },
    {
      title: "Table 4 Two",
      category: "URBANDINE",
      description: "Restaurant & hospitality websites",
      image: "/api/placeholder/800/500",
      type: "BUSINESS",
    },
    {
      title: "Nature Gallery",
      category: "MODUS OPERANDI",
      description: "Minimalist portfolio layouts",
      image: "/api/placeholder/800/500",
      type: "PORTFOLIO",
    },
    {
      title: "Mountain Explorer",
      category: "ADVENTURE",
      description: "Travel & outdoor experiences",
      image: "/api/placeholder/800/500",
      type: "PERSONAL",
    },
  ];

  return (
    <div className="bg-white text-white">
      {/* Previous sections remain the same */}

      {/* Template Showcase Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex justify-start sm:justify-center space-x-8 min-w-max px-4">
              {[
                "FEATURED",
                "ONLINE STORE",
                "BUSINESS",
                "PORTFOLIO",
                "PERSONAL",
                "EVENT",
                "BLOG",
              ].map((category) => (
                <button
                  key={category}
                  className={`px-2 py-1 whitespace-nowrap ${
                    category === "FEATURED"
                      ? "text-[var(--sitora-primary)]"
                      : "text-black"
                  } hover:text-[var(--sitora-primary)] transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-[var(--sitora-primary)]"
              >
                {/* Template Image */}
                <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Template Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-medium text-cyan-400 mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <button className="flex items-center text-white hover:text-[var(--sitora-primary)] transition-colors">
                    View Template <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the components remain the same */}
    </div>
  );
};

export default Showcase;
