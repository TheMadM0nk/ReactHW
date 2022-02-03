import { } from './types';

const initState = {
    messages: {
        Gogi: [
            { author: 'Gogi', message: 'Hello there!', date: new Date(), style: 'msg_container' }
        ]
    }
};

export const messangerReducer = (state = initState, action) => {

    switch (action.type) {


        default:
            return state;
    }
}