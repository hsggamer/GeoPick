import React from 'react';
import Firebase, { User } from './firebase';
export const FirebaseContext = React.createContext<null | Firebase>(null);
export const AuthUserContext = React.createContext<null | User | undefined>(null);
