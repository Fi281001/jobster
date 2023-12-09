import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


import { getUserFromLocalStorage,
        addUserToLocalStorage,
        removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from './userThunk';

// đăng kí
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI);
  }
);
// đăng nhập
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
      return loginUserThunk('/auth/login', user, thunkAPI);
    }
);

// upadate user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI);
  }
);

// initalstate
const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
  };
 
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
      // xử lý side bar
      toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen;
      },
      // logout
      logoutUser: (state) => {
        state.user = null;
        state.isSidebarOpen = false;
        toast.success('Logout Successful!');
        removeUserFromLocalStorage();
      },
    },
    extraReducers: {
      // đăng kí
      [registerUser.pending]: (state) => {
        state.isLoading = true;
      },
      [registerUser.fulfilled]: (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      },
      [registerUser.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
      // login
      [loginUser.pending]: (state) => {
        state.isLoading = true;
      },
      [loginUser.fulfilled]: (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      },
      [loginUser.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
      // update user
      [updateUser.pending]: (state) => {
        state.isLoading = true;
      },
      [updateUser.fulfilled]: (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success('User Updated');
      },
      [updateUser.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
  }});
  export const  {toggleSidebar, logoutUser} = userSlice.actions
  export default userSlice.reducer;