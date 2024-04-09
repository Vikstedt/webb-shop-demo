
import ContactForm from '../components/Contact/ContactForm.js';
import SideSection from '../components/Contact/SideSection.js';

export default function Contact() {
    return (
        <div className="flex flex-wrap-reverse mx-auto my-10 lg:w-[70%]">
        <div className="w-full lg:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/3">
          <SideSection />
        </div>
      </div>
    );
}

