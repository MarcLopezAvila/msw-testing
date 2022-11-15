import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';
import { enableFetchMocks } from 'jest-fetch-mock';

configure({ asyncUtilTimeout: 3000 });

enableFetchMocks();
