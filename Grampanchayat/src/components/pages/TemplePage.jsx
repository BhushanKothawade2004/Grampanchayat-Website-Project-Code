import PageHero from '../PageHero';
import mandirImage from '../../images/back.jpg';
import mandir1Image from '../../images/mandir1.jpeg';
import mandir2Image from '../../images/mandir2.jpeg';
import mandir3Image from '../../images/mandir3.jpeg';

const TemplePage = () => {
  const temples = [
    {
      id: 1,
      image: mandir1Image,
      name: 'मंदिर १',
      description: 'अहिल्याबाई होळकर यांच्या काळातील ऐतिहासिक प्रसिद्ध तीर्थक्षेत्र हेरंब गणेश देवस्थान जयनगर', // Space for description - content will be provided later
      location: 'जयनगर'
    },
    {
      id: 2,
      image: mandir2Image,
      name: 'मंदिर २',
      description: 'ग्रामपंचायत जयनगर च्या वतीने तीर्थक्षेत्र असलेल्या हेरंब देवस्थानाची प्रत्येक गलीला नावे देण्यात आले आहेत', // Space for description - content will be provided later
      location: 'जयनगर'
    },
    {
      id: 3,
      image: mandir3Image,
      name: 'मंदिर ३',
      description: 'सुसज्ज आयुष्यमान आरोग्य मंदिर जयनगर', // Space for description - content will be provided later
      location: 'जयनगर'
    }
  ];

  return (
    <div>
      <PageHero 
        title="मंदिर" 
        subtitle="माहिती"
        image={mandirImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            मंदिर
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <div
                key={temple.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`relative overflow-hidden h-[300px] ${
                  temple.id === 3 ? 'bg-gray-100 flex items-center justify-center' : ''
                }`}>
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className={
                      temple.id === 3
                        ? "max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                        : "w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-800 mb-3">
                    {temple.name}
                  </h3>
                  <div className="text-gray-700 mb-4 leading-relaxed min-h-[60px]">
                    {temple.description ? (
                      <p>{temple.description}</p>
                    ) : (
                      <p className="text-gray-400 italic">विवरण जोडले जाईल...</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{temple.location}</span>
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

export default TemplePage;

