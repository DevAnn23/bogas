import ContactUsFormI from '../../components/Form/ContactUsForm/ContactUsForm.type';
import ImageI from '../../components/Image/Image.type';
import AuthorI from '../../types/Author.type';

interface ContactUsI {
    options: {
        defaultContactUs: {
            subtitle: string;
            title: string;
            iconTwitter: ImageI;
            iconLinkedin: ImageI;
            contactUser: AuthorI;
        };
    };
    subtitle: string;
    title: string;
    subject: string;
    recipients?: ContactUsFormI['recipients'];
    contactPerson?: AuthorI;
}

export default ContactUsI;
