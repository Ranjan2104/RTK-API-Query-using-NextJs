'use client';

import { Provider } from "react-redux";
import {store} from '../Store/Central_Store/index';

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}