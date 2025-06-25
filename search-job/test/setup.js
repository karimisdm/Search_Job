import {cleanup} from '@testing-library/vue';
import 'vitest-dom/extend-expect'
import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';

expect.extend(matchers);

 afterEach(()=>{
    cleanup();
 })