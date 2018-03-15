import * as types from './actionTypes';
import calendarApi from '../api/mockCalendarAPI';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function LoadMonthMapData(data) {
    return { type: types.LOAD_MONTHMAP_DATA, data };
}

export function LoadCurrentMonthData(data) {
    return { type: types.LOAD_CURRENT_MONTH_DATA, data };
}

export function LoadDaysPassedData(data) {
    return { type: types.LOAD_DAYS_PASSED_DATA, data };
}

export function LoadDaysSavedData(data) {
    return { type: types.LOAD_DAYS_SAVED_DATA, data };
}

export function SelectDayPassed(data) {
    return { type: types.SELECT_DAY_PASSED, data };
}

export function SelectDaySaved(data) {
    return { type: types.SELECT_DAY_SAVED, data };
}

export function loadMonthMap() {
    console.log("loadMonthMap called");
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return calendarApi.getMonthMap().then(entry => {
            dispatch(LoadMonthMapData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}

export function loadCurrentMonth() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return calendarApi.getCurrentMonth().then(entry => {
            dispatch(LoadCurrentMonthData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}

export function loadDaysPassed() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return calendarApi.getPassedDays().then(entry => {
            dispatch(LoadDaysPassedData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}

export function loadDaysSaved() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return calendarApi.getSavedDays().then(entry => {
            dispatch(LoadDaysSavedData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}

export function selectDayPassed(save) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        calendarApi.selectPassDay(save);
        return calendarApi.getPassedDays().then(entry => {
            dispatch(LoadDaysPassedData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}

export function selectDaySaved(save) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        calendarApi.selectSaveDay(save);
        return calendarApi.getSavedDays().then(entry => {
            dispatch(LoadDaysSavedData(entry));
        }).catch(error => {
            console.log(error);
            throw (error);
        });
    };
}