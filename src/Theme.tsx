import {BackgroundColorProperty, ColorProperty} from 'csstype';
import {createContext, useContext} from 'react';
import {ensure} from './ss-util';

export type Theme = {
    primaryColor: ColorProperty,
    backgroundColor: BackgroundColorProperty,
};

export const fetchTheme = async (): Promise<Theme> => {
    return Promise.resolve({
        primaryColor: 'blue',
        backgroundColor: 'lightgrey'
    });
};

export const ThemeCtx = createContext<Theme | null>(null);

export function useTheme(): Theme {
    const theme = useContext(ThemeCtx);
    return ensure(theme);
}