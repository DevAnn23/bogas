import BlogArchive from '../sections/BlogArchive/BlogArchive';
import NoSection from '../sections/NoSection/NoSection';
import HeroPrimary from '../sections/HeroPrimary/HeroPrimary';
import HeroWithInteractiveHex from '../sections/HeroWithInteractiveHex/HeroWithInteractiveHex';
import HeroWithImagesAndLists from '../sections/HeroWithImagesAndLists/HeroWithImagesAndLists';
import HeroWithVideo from '../sections/HeroWithVideo/HeroWithVideo';
import Testimonials from '../sections/Testimonials/Testimonials';
import ArticlesList from '../sections/ArticlesList/ArticlesList';
import CaseStudies from '../sections/CaseStudies/CaseStudies';
import ImageWithContent from '../sections/ImageWithContent/ImageWithContent';
import IconsWithContent from '../sections/IconsWithContent/IconsWithContent';
import MediaRecognition from '../sections/MediaRecognition/MediaRecognition';
import Research from '../sections/Research/Research';
import BoxesList from '../sections/BoxesList/BoxesList';
import Gallery from '../sections/Gallery/Gallery';
import JobOffers from '../sections/JobOffers/JobOffers';
import OurTeam from '../sections/OurTeam/OurTeam';
import Benefits from '../sections/Benefits/Benefits';
import RecruitmentProccess from '../sections/RecruitmentProccess/RecruitmentProccess';
import ContentWithTitleAndButton from '../sections/ContentWithTitleAndButton/ContentWithTitleAndButton';
import Videos from '../sections/Videos/Videos';
import WysiwygContent from '../sections/WysiwygContent/WysiwygContent';
import Newsletter from '../sections/Newsletter/Newsletter';
import ContactUs from '../sections/ContactUs/ContactUs';

const getSectionComponent = (name: string): ((props: any) => JSX.Element) => {
    const sectionName = name?.split('_').pop() || '';
    switch (sectionName) {
        case 'BlogArchive':
            return BlogArchive;
        case 'HeroPrimary':
            return HeroPrimary;
        case 'HeroWithInteractiveHex':
            return HeroWithInteractiveHex;
        case 'HeroWithImagesAndLists':
            return HeroWithImagesAndLists;
        case 'HeroWithVideo':
            return HeroWithVideo;
        case 'Testimonials':
            return Testimonials;
        case 'ArticlesList':
            return ArticlesList;
        case 'CaseStudies':
            return CaseStudies;
        case 'ImageWithContent':
            return ImageWithContent;
        case 'IconsWithContent':
            return IconsWithContent;
        case 'MediaRecognition':
            return MediaRecognition;
        case 'Research':
            return Research;
        case 'BoxesList':
            return BoxesList;
        case 'JobOffers':
            return JobOffers;
        case 'Gallery':
            return Gallery;
        case 'OurTeam':
            return OurTeam;
        case 'Benefits':
            return Benefits;
        case 'RecruitmentProccess':
            return RecruitmentProccess;
        case 'ContentWithTitleAndButton':
            return ContentWithTitleAndButton;
        case 'Videos':
            return Videos;
        case 'WysiwygContent':
            return WysiwygContent;
        case 'Newsletter':
            return Newsletter;
        case 'ContactUs':
            return ContactUs;
        default:
            return NoSection;
    }
};

export default getSectionComponent;
