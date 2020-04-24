import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';
import StackNavigation from '../components/StackNavigation';


export default function AppContainer(){
    return(
        <ErrorBoundary>
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer >
        </ErrorBoundary >
    );
}

