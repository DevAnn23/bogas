const getItem = (name: string) => {
    if (typeof document != undefined) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
};

export const useCookie = (name: string) => {
    const getCookie = () => getItem(name) || '';

    return getCookie();
};
