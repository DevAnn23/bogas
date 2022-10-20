import ImageI from '../../components/Image/Image.type';
import AuthorI from '../../types/Author.type';

interface OurTeamI {
    options: {
        ourTeamDefaultTitle: string;
        ourTeamTopRightBg?: ImageI;
        ourTeamBottomLeftBg?: ImageI;
    };
    subtitle?: string;
    title: string;
    workmates: AuthorI[];
}

export default OurTeamI;
