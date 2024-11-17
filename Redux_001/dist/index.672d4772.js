let reduxState = {
    post: 0,
    name: "ayush kumar ",
    age: 34
};
function reducer(state, action) {
    if (action.type === 'post/increment') return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === "post/decrement") return {
        ...state,
        post: state.post - 1
    };
    else if (action.type === "post/increment") {
        console.log(payload);
        return {
            ...state,
            post: state.post + action.payload
        };
    }
    return state;
}
reduxState = reducer(reduxState, {
    type: "post.increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/decrement"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "Ayush",
    payload: 20
});
console.log(reduxState);

//# sourceMappingURL=index.672d4772.js.map
