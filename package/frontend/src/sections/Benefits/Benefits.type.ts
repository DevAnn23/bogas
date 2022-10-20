import BenefitI from '../../components/BenefitsList/Benefit/Benefit.type';

interface BenefitsI {
    title?: string;
    options: {
        benefits: {
            defaultTitle: string;
            residentsOnlyText: string;
            titlesList: {
                title: string;
                benefitsList: BenefitI['benefit'][];
                forPolishList: BenefitI['benefit'][];
            }[];
        };
    };
}

export default BenefitsI;
