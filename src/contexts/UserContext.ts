import { createContext } from 'react';
import { UserContextType } from '../types/types';

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
