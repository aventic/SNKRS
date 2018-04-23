const page = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.data;
        default:
            return state;
    }
};

export default page;