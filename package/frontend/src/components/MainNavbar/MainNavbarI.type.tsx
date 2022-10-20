interface MainNavbarI {
    menuItems: {
        label: string;
        url: string;
        title: string;
        parentId: string;
        databaseId: string,
        childItems: {
            nodes: {
                url: string;
                label: string;
            }[]
        };
    }[];
    className?: string;
}

export default MainNavbarI;