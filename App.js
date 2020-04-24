import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useState, useEffect } from 'react';
import { isAuthenticated } from '@okta/okta-react-native';

import AppContainer from './components/AppContainer';

export default function App() {
  return (
    <AppContainer />
  );
}

