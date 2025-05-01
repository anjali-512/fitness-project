import axios from 'axios';

const API_URL = 'http://localhost:3002/members';
const CONTACT_URL = 'http://localhost:3002/contacts';
const SESSION_URL = 'http://localhost:3002/session';

export const addMember = async (memberData) => {
    try {
        const response = await axios.post(API_URL, memberData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addContact = async (contactData) => {
    try {
        const response = await axios.post(CONTACT_URL, contactData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getContact = async () => {
    try {
        const response = await axios.get(CONTACT_URL)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getTrainees = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 


export const postSession = async (obj) => {
    try {
        return await axios.post(SESSION_URL, obj)
    } catch (error) {
        throw error
    }
}


export const getSession = async () => {
    try {
        const response = await axios.get(SESSION_URL)
        return response.data
    } catch (error) {
        throw error
    }
}
