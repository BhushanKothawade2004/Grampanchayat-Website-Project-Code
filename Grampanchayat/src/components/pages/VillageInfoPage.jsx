import PageHero from '../PageHero';
// import PopulationStats from '../PopulationStats';
// import Achievements from '../Achievements';
import gavImage from '../../images/back.jpg';

const VillageInfoPage = () => {
  return (
    <div>
      <PageHero 
        title="गावाची माहिती" 
        subtitle="माहिती"
        image={gavImage}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
              गावाची माहिती
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">गाव परिचय</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  जयनगर हे एक समृद्ध व शांत गाव आहे, जिथे शेती, परंपरा आणि एकतेला महत्त्व दिले जाते. 
                  गावात साक्षरतेचा दर उच्च आहे आणि शिक्षणाचा दर्जा चांगला आहे. 
                  स्वतःची ग्रामपंचायत असल्याने स्थानिक पातळीवर प्रशासनाची सुविधा उपलब्ध आहे.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">स्थान</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At/Post-जयनगर खु, तालुका-चांदवड, जिल्हा-नाशिक
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">मुख्य वैशिष्ट्ये</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>उच्च साक्षरता दर</li>
                  <li>शेती हा मुख्य व्यवसाय</li>
                  <li>सांस्कृतिक वारसा जपणारे गाव</li>
                  <li>राष्ट्रीय महामार्गाजवळ सोयीस्कर स्थान</li>
                  <li>आरोग्य आणि शिक्षण सुविधा उपलब्ध</li>
                </ul>
              </div>
            </div>

            {/* Detailed Statistics Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-teal-800 mb-8">
                तपशीलवार आकडेवारी
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Basic Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">मूलभूत माहिती</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">स्थापना तारीख:</span>
                      <span className="text-gray-900 font-semibold">01/08/1959</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">ग्रामपंचायत कार्यकाल:</span>
                      <span className="text-gray-900 font-semibold">18/12/2023 ते 17/12/2028</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण भौगोलिक क्षेत्र:</span>
                      <span className="text-gray-900 font-semibold">674.66 हेक्टर</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण घरे:</span>
                      <span className="text-gray-900 font-semibold">419</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण मजरे:</span>
                      <span className="text-gray-900 font-semibold">1126</span>
                    </div>
                  </div>
                </div>

                {/* Population Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">लोकसंख्या</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण लोकसंख्या:</span>
                      <span className="text-gray-900 font-semibold">2142</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">पुरुष:</span>
                      <span className="text-gray-900 font-semibold">1089</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">स्त्री:</span>
                      <span className="text-gray-900 font-semibold">1053</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">0 ते 6 मुले/मुली:</span>
                      <span className="text-gray-900 font-semibold">257</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">मुले (0-6):</span>
                      <span className="text-gray-900 font-semibold">146</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">मुली (0-6):</span>
                      <span className="text-gray-900 font-semibold">111</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Scheduled Tribes */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">अनुसूचित जमाती (ST)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण:</span>
                      <span className="text-gray-900 font-semibold">701</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">पुरुष:</span>
                      <span className="text-gray-900 font-semibold">367</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">स्त्री:</span>
                      <span className="text-gray-900 font-semibold">334</span>
                    </div>
                  </div>
                </div>

                {/* Scheduled Castes */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">अनुसूचित जाती (SC)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण:</span>
                      <span className="text-gray-900 font-semibold">296</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">पुरुष:</span>
                      <span className="text-gray-900 font-semibold">153</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">स्त्री:</span>
                      <span className="text-gray-900 font-semibold">143</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Voters Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">मतदार माहिती</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">एकूण मतदार:</span>
                      <span className="text-gray-900 font-semibold">1965</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">पुरुष:</span>
                      <span className="text-gray-900 font-semibold">1011</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">स्त्री:</span>
                      <span className="text-gray-900 font-semibold">954</span>
                    </div>
                  </div>
                </div>

                {/* Land Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">जमीन माहिती</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-700 font-medium">जिरायत क्षेत्र:</span>
                      <span className="text-gray-900 font-semibold">168.99 हेक्टर</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">बागायत:</span>
                      <span className="text-gray-900 font-semibold">423.51 हेक्टर</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Achievements /> */}
      {/* <PopulationStats /> */}
    </div>
  );
};

export default VillageInfoPage;

