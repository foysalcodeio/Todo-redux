//use redux toolkit
import {configureStore} from '@reduxjs/toolkit'
import functionsReducer from '../function/functions'

export default configureStore({
    reducer:{
        counter:functionsReducer
    }
});