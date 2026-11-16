import CorsoleCard from '@/component/event/CorsoleCard';
import Banner from '@/component/homepage/Banner';
import CTA from '@/component/homepage/CTA';
import Gallery from '@/component/homepage/Gallery';
import Newsletter from '@/component/homepage/Newsletter';
import WhyChooseUs from '@/component/homepage/WhyChooseUs';


const HomePage = () => {
  return (
    <div>
    <Banner/>
    <CorsoleCard/>
    <WhyChooseUs/>
    <Gallery/>
    <CTA/>
    <Newsletter/>
    </div>
  );
};

export default HomePage;