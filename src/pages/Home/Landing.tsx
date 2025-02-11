import { Star } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-10">
        {/* Left content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Start your journey with{" "}
            <span className="text-blue-600">Sitora</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[var(--sitora-primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get started
            </button>
            <button className="text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
              Contact sales team
            </button>
          </div>

          {/* Reviews section */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="space-y-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">4.6</span> /5 - from 12k reviews
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">4.8</span> /5 - from 5k reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/3] relative">
            <img
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="People working together"
              className="rounded-lg object-cover"
            />
            {/* Decorative squares */}
            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white"></div> */}
            {/* <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white"></div> */}
            {/* <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-white"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
