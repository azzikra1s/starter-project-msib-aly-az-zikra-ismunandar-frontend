import Navbar from './templates/Navbar';
import Profile from './Profile';
import Footer from './templates/Footer';

const Template = () => {
    return (
      <div className="flex">
        <div className="flex-1 relative overflow-y-auto h-screen">
          <Navbar />
          <div className="w-full bg-surface">
            <Profile />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Template;
