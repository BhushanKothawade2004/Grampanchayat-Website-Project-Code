import PageHero from '../PageHero';
import backImage from '../../images/back.jpg';
import yojana1Image from '../../images/yojana1.jpeg';
import yojana2Image from '../../images/yojana2.jpeg';
import yojana3Image from '../../images/yojana3.jpeg';
import yojana4Image from '../../images/yojana4.jpeg';
import yojana5Image from '../../images/yojana5.jpeg';
import yojana6Image from '../../images/yojana6.jpeg';
import yojana7Image from '../../images/yojana7.jpeg';

const YojanaPage = () => {
  const activities = [
    {
      id: 1,
      image: yojana1Image,
      title: 'क्रियाकलाप १',
      description: 'मुख्यमंत्री समृद्ध पंचायत राज अभियान जय नगर च्या वतीने स्वच्छता अभियान राबविण्यात आले', // Space for description - content will be provided later
    },
    {
      id: 2,
      image: yojana2Image,
      title: 'क्रियाकलाप २',
      description: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्रामपंचायत जयनगर च्या वतीने तीर्थक्षेत्र असलेल्या जयनगर देवस्थान येथे प्रत्येक मंदिराजवळ हॅन्ड वॉश स्टेशन बसवण्यात आले आहेत', // Space for description - content will be provided later
    },
    {
      id: 3,
      image: yojana3Image,
      title: 'क्रियाकलाप ३',
      description: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान ग्रामपंचायत जयनगर च्या वतीने महिला कार्यशाळा आयोजित करण्यात आली', // Space for description - content will be provided later
    },
    {
      id: 4,
      image: yojana4Image,
      title: 'क्रियाकलाप ४',
      description: 'ग्रामपंचायत जयनगर च्या वतीने ग्रामस्थांसाठी (आरो फिल्टर)शुद्ध पिण्याच्या पाण्याची व्यवस्था करण्यात आली', // Space for description - content will be provided later
    },
    {
      id: 5,
      image: yojana5Image,
      title: 'क्रियाकलाप ५',
      description: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत स्वच्छतेची शपथ घेण्यात आली', // Space for description - content will be provided later
    },
    {
      id: 6,
      image: yojana6Image,
      title: 'क्रियाकलाप ६',
      description: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्रामपंचायत जयनगरच्या वतीने घरोघरी डजबीन वाटप करण्यात आले', // Space for description - content will be provided later
    },
    {
      id: 7,
      image: yojana7Image,
      title: 'क्रियाकलाप ७',
      description: 'अमर धाम जवळ चे वृक्ष लागवड',
    },
  ];

  return (
    <div>
      <PageHero 
        title="योजना / क्रियाकलाप" 
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
              योजना / क्रियाकलाप
            </h2>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center h-[300px]">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-teal-800 mb-4">
                      {activity.title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed min-h-[60px]">
                      {activity.description ? (
                        <p>{activity.description}</p>
                      ) : (
                        <p className="text-gray-400 italic">विवरण जोडले जाईल...</p>
                      )}
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

export default YojanaPage;

