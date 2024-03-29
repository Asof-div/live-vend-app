import HTTP from "../../../utils/Http";

export function storeFeaturedProducts(state, payload) {
    return Object.assign({}, state, { 
        featuredProducts : payload,
    });
}

export function setCurrencyList(state, payload) {
    return Object.assign({}, state, { 
        currencies : payload,
    });
}

export function setCategoryList(state, payload) {
    return Object.assign({}, state, { 
        categories : payload,
    });
}

export function setAuthUser(state, payload) {
    return Object.assign({}, state, { 
        authUser : payload,
    });
}

export function setAuthToken(state, payload) {
    return Object.assign({}, state, { 
        authToken : payload,
    });
}

export function login(state, payload) {
    // localStorage.setItem("access_token", payload);
    HTTP.defaults.headers.common["Authorization"] = `Bearer ${payload.accessToken}`;
    return {
        ...state,
        isAuthenticated: true,
        authToken: payload.accessToken,
        authCognitoUser: payload.attributes
    };
}

export function logout(state) {
    // localStorage.removeItem("access_token");
    HTTP.defaults.headers.common["Authorization"] = ``;

    return {
        ...state,
        isAuthenticated: false,
        authToken: null,
        authCognitoUser: {email_verified: false}
    };
}

export function setAuthPage(state, payload) {
    return {
        ...state,
        showAuth: payload.showAuth,
        authPage: payload.authPage || 'login'
    };
}

export function setIntendedRoute(state, payload) {
    return {
        ...state,
        intendedRoute: payload,
    };
}