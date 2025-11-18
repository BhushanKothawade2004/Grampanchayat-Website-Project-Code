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
import mandir1Image from '../../images/mandir1.jpeg';
import mandir2Image from '../../images/mandir2.jpeg';
import mandir3Image from '../../images/mandir3.jpeg';
import tourism1Image from '../../images/Tourism1.jpeg';
import yojana1Image from '../../images/yojana1.jpeg';
import yojana2Image from '../../images/yojana2.jpeg';
import yojana3Image from '../../images/yojana3.jpeg';
import yojana4Image from '../../images/yojana4.jpeg';
import yojana5Image from '../../images/yojana5.jpeg';
import yojana6Image from '../../images/yojana6.jpeg';
import yojana7Image from '../../images/yojana7.jpeg';

const GalleryPage = () => {
  const images = [
    { id: 1, src: backImage, alt: 'ग्रामपंचायत' },
    { id: 2, src: gavImage, alt: 'गाव' },
    { id: 3, src: logoImage, alt: 'लोगो' },
    { id: 4, src: sarpanchImage, alt: 'सरपंच' },
    { id: 5, src: upsarpanchImage, alt: 'उपसरपंच' },
    { id: 6, src: official1Image, alt: 'अधिकारी १' },
    { id: 7, src: official2Image, alt: 'अधिकारी २' },
    { id: 8, src: official3Image, alt: 'अधिकारी ३' },
    { id: 9, src: official4Image, alt: 'अधिकारी ४' },
    { id: 10, src: official5Image, alt: 'अधिकारी ५' },
    { id: 11, src: official6Image, alt: 'अधिकारी ६' },
    { id: 12, src: official7Image, alt: 'अधिकारी ७' },
    { id: 13, src: official8Image, alt: 'अधिकारी ८' },
    { id: 14, src: official9Image, alt: 'अधिकारी ९' },
    { id: 15, src: mandir1Image, alt: 'मंदिर १' },
    { id: 16, src: mandir2Image, alt: 'मंदिर २' },
    { id: 17, src: mandir3Image, alt: 'मंदिर ३' },
    { id: 18, src: tourism1Image, alt: 'पर्यटन स्थळ १' },
    { id: 19, src: yojana1Image, alt: 'क्रियाकलाप १' },
    { id: 20, src: yojana2Image, alt: 'क्रियाकलाप २' },
    { id: 21, src: yojana3Image, alt: 'क्रियाकलाप ३' },
    { id: 22, src: yojana4Image, alt: 'क्रियाकलाप ४' },
    { id: 23, src: yojana5Image, alt: 'क्रियाकलाप ५' },
    { id: 24, src: yojana6Image, alt: 'क्रियाकलाप ६' },
    { id: 25, src: yojana7Image, alt: 'क्रियाकलाप ७' },
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

