interface RecruitmentProccessI {
    subtitle?: string;
    title: string;
    description?: string;
    descriptionWithBackground?: string;
    recruitmentProccess: {
        title: string;
        description: string;
    }[];
}

export default RecruitmentProccessI;
