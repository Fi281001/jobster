import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import jobSlice from './features/jobs/jobSlice';
import allJobsSlice from './features/alljobs/allJobsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});