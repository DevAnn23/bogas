import { useMediaQuery } from 'react-responsive';
import * as breakpoints from '../assets/styles/variables/breakpoints.module.scss';

const useResponsive = (size: BreakpointsT) => {
    return useMediaQuery({
        query: `(min-width: ${breakpoints[size]}px)`,
    });
};

export default useResponsive;

type BreakpointsT = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fhd';
