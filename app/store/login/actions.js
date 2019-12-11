import * as types from './actionTypes'
import {apiLoadingStart, apiLoadingStop} from 'app/store/global'
import {API, ContentType, Method, SessionManager} from "react-native-gtlcomponent";
import {endPoints, SesstionKey} from "app/Constants";
import {ToastType, showToast} from "app/Utils";


export const loginUser = (params, {SuccessCallback, FailureCallback}) => {
    return (dispatch) => {
        const headers = {
            'type': ContentType.applicationjson
        };
        dispatch(loginLoadingStart());
        API.getInstance().Fetch(endPoints.login, headers, params, false,
            {
                SuccessCallback: response => {
                    dispatch(loginLoadingStop());

                        SessionManager.storeKeyValue(SesstionKey.USERS, JSON.stringify(response.Data)).then(() => {
                            SuccessCallback(response);
                        })

                },
                FailureCallback: response => {
                    dispatch(loginLoadingStop());
                    FailureCallback(response);
                    showToast(JSON.stringify(response.data.Data), ToastType.DANGER)
                }
            })


    }
};
export const forgotPassword = (username, {SuccessCallback, FailureCallback}) => {
    return (dispatch) => {
        const headers = {
            'type': ContentType.applicationjson
        };
        const params = new URLSearchParams();
        params.append('UserName', username);
        dispatch(apiLoadingStart());
        API.getInstance().Fetch(endPoints.forgotPassword, headers, params, false,
            {
                SuccessCallback: response => {
                    dispatch(apiLoadingStop());
                    showToast("OTP is sent on your mailID "+response.Data.OTP , ToastType.SUCCESS);
                    SuccessCallback(response);

                },
                FailureCallback: response => {
                    dispatch(apiLoadingStop());
                    showToast(JSON.stringify(response.data.Data), ToastType.DANGER)
                    FailureCallback(response);

                }
            })
    }
};

export const verifyOtp = (userId, {SuccessCallback, FailureCallback}) => {
    return (dispatch) => {
        const headers = {
            'type': ContentType.applicationjson
        };
        const params = new URLSearchParams();

        params.append('userId', 1812);
        dispatch(apiLoadingStart());
        API.getInstance().Fetch(endPoints.verifyOtp, headers, params, false,
            {
                SuccessCallback: response => {
                    dispatch(apiLoadingStop());
                    SuccessCallback(response);
                    showToast(JSON.stringify(response.Data), ToastType.SUCCESS)
                },
                FailureCallback: response => {
                    dispatch(apiLoadingStop());
                    FailureCallback(response);
                    showToast(JSON.stringify(response.data.Data), ToastType.DANGER)
                }
            })
    }
};

export const changePassword = (params, {SuccessCallback, FailureCallback}) => {
    return (dispatch) => {
        const headers = {
            'type': ContentType.applicationjson
        };
        dispatch(apiLoadingStart());
        API.getInstance().Fetch(endPoints.changePassword, headers, params, false,
            {
                SuccessCallback: response => {
                    dispatch(apiLoadingStop());
                    showToast(response.Data, ToastType.SUCCESS)
                    SuccessCallback(response);

                },
                FailureCallback: response => {
                    dispatch(apiLoadingStop());
                    FailureCallback(response);
                    showToast(JSON.stringify(response.data.Data), ToastType.DANGER)
                }
            })
    }
};
const loginLoadingStart = () => ({type: types.API_LOADING_START});
const loginLoadingStop = () => ({type: types.API_LOADING_STOP});
