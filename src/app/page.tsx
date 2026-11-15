import CorsoleCard from '@/component/event/CorsoleCard';
import Banner from '@/component/homepage/Banner';
import CTA from '@/component/homepage/CTA';
import WhyChooseUs from '@/component/homepage/WhyChooseUs';


const HomePage = () => {
  return (
    <div>
    <Banner/>
    <CorsoleCard/>
    <CTA/>
    <WhyChooseUs/>
    </div>
  );
};

export default HomePage;