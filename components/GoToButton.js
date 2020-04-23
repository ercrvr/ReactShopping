import * as React from 'react';
import { Button } from 'react-native';

export default function GoToButton({ screenName }) {
    return (
        <Button
            title={`Go to ${screenName}`}
            onPress={() => navigate(screenName)}
        />
    );
}