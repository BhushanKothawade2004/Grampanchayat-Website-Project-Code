import PageHero from '../PageHero';
import backImage from '../../images/back.jpg';
import gavImage from '../../images/gav.jpeg';
import logoImage from '../../images/logo.png';
import sarpanchImage from '../../images/sarpanch.png';
import upsarpanchImage from '../../images/upsarpanch.png';
import official1Image from '../../images/official1.png';
import official2Image from '../../images/official2.png';
import official3Image from '../../images/official3.png';
import official4Image from '../../images/official4.png';
import official5Image from '../../images/official5.png';
import official6Image from '../../images/official6.png';
import official7Image from '../../images/official7.png';
import official8Image from '../../images/official8.png';
import official9Image from '../../images/official9.png';

const GalleryPage = () => {
  const images = [
    { id: 1, src: backImage, alt: 'Gallery Image 1' },
    { id: 2, src: gavImage, alt: 'Gallery Image 2' },
    { id: 3, src: logoImage, alt: 'Gallery Image 3' },
    { id: 4, src: sarpanchImage, alt: 'Gallery Image 4' },
    { id: 5, src: upsarpanchImage, alt: 'Gallery Image 5' },
    { id: 6, src: official1Image, alt: 'Gallery Image 6' },
    { id: 7, src: official2Image, alt: 'Gallery Image 7' },
    { id: 8, src: official3Image, alt: 'Gallery Image 8' },
    { id: 9, src: official4Image, alt: 'Gallery Image 9' },
    { id: 10, src: official5Image, alt: 'Gallery Image 10' },
    { id: 11, src: official6Image, alt: 'Gallery Image 11' },
    { id: 12, src: official7Image, alt: 'Gallery Image 12' },
    { id: 13, src: official8Image, alt: 'Gallery Image 13' },
    { id: 14, src: official9Image, alt: 'Gallery Image 14' },
  ];

  return (
    <div>
      <PageHero 
        title="फोटो गॅलरी" 
        subtitle="माहिती"
        image={backImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Dotted Line */}
          <div className="flex justify-center mb-4">
            <div className="w-32 border-t-2 border-dotted border-gray-400"></div>
          </div>

          {/* Sub-heading */}
          <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            फोटो गॅलरी
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GalleryPage;

