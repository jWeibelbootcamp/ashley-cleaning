import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// just pertains to user part of authentication
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // resets values to initial state
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;