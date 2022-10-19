import {createContext} from 'react';
import {Crystal} from '@prisma/client';

export const cartContext = createContext<Crystal[]>([]);

