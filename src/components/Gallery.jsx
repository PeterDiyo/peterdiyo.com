import SectionTitle from "./SectionTitle";
import { galleryData } from "../data";

const Gallery = () => {
  return (
    <div className="py-12 align-element" id="honors">
      <SectionTitle text="Honors Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 px-4 lg:px-0">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-b hover:shadow-xl transform transition-all duration-500 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 hover:opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Text Section */}
            <div className="p-4">
              <p className="text-gray-100 mb-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
