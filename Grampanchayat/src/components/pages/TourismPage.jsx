import PageHero from '../PageHero';
import backImage from '../../images/back.jpg';
import tourism1Image from '../../images/Tourism1.jpeg';
import mandir1Image from '../../images/mandir1.jpeg';
import mandir3Image from '../../images/mandir3.jpeg';

const TourismPage = () => {
  const touristPlaces = [
    {
      id: 1,
      image: tourism1Image,
      title: 'पर्यटन स्थळ १',
      description: 'ग्रामपंचायत जयनगर सुसज्ज इमारत या इमारतीच्या दर्शनी भागाला महात्मा ज्योतिराव फुले, सावित्रीबाई फुले,क्रांतिवीर बिरसा मुंडा,सरदार वल्लभभाई पटेल यांचे स्मारक आहेत', // Space for description - content will be provided later
      location: 'जयनगर'
    },
    {
      id: 2,
      image: mandir1Image,
      title: 'पर्यटन स्थळ २',
      description: 'अहिल्याबाई होळकर यांच्या काळातील ऐतिहासिक प्रसिद्ध तीर्थक्षेत्र हेरंब गणेश देवस्थान जयनगर', // Space for description - content will be provided later
      location: 'जयनगर'
    },
    {
      id: 3,
      image: mandir3Image,
      title: 'पर्यटन स्थळ ३',
      description: 'सुसज्ज आयुष्यमान आरोग्य मंदिर जयनगर', // Space for description - content will be provided later
      location: 'जयनगर'
    }
  ];

  return (
    <div>
      <PageHero 
        title="पर्यटन स्थळ" 
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
              पर्यटन स्थळ
            </h2>

            {/* Tourist Places Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {touristPlaces.map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden h-[300px]">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">
                      {place.title}
                    </h3>
                    <div className="text-gray-700 mb-4 leading-relaxed min-h-[60px]">
                      {place.description ? (
                        <p>{place.description}</p>
                      ) : (
                        <p className="text-gray-400 italic">विवरण जोडले जाईल...</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{place.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
