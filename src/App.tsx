import React, {useState} from 'react';
import {AppLoaded} from './AppLoaded';
import {AppLoading} from './AppLoading';
import {useAsync} from './ss-react-utils';
import {fetchTheme, Theme, ThemeCtx} from './Theme';
import {fetchUser, User, UserCtx} from './User';

export const App: React.FC = () => {

    const [theme, setTheme] = useState<Theme | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useAsync({
        op: fetchTheme,
        onSuccess: setTheme,
        deps: []
    });

    useAsync({
        op: fetchUser,
        onSuccess: setUser,
        deps: []
    });

    if (user !== null && theme !== null) {
        return <UserCtx.Provider value={user}>
            <ThemeCtx.Provider value={theme}>
                <AppLoaded/>
            </ThemeCtx.Provider>
        </UserCtx.Provider>;
    } else {
        return <AppLoading/>;
    }


};
