import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ErrorBoundary from 'react-native-error-boundary';
import LoginNavigation from '../components/LoginNavigation';



export default function AppContainer(){
    return(
        <ErrorBoundary>
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer >
        </ErrorBoundary >
    );
}

