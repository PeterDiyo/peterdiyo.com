import SectionTitle from "./SectionTitle";
import { galleryData } from "../data";

const Gallery = () => {
  return (
    <div className="py-10 align-element " id="honors">
      <SectionTitle text="Honors Gallery" />
      <div className="py-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={item.imageUrl}
              alt={item.description}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md text-gray-300 mb-2">{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
