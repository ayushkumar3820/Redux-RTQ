export function myCreateStore() {
    let state;
    const listeners = [];
    const Store = {
        getState() {
            return state;
        },
        dispatch(action) {
            listeners.forEach((listener) => {
                listener();
            });
        },
        subscribe(listener) {
            listeners.push(listener);
            return function () {
                const listenerIndex = listeners.findIndex(
                    (registeredListener) => registeredListener === listener
                );
                listeners.splice(listenerIndex, 1);
            };
        },
    };
    // Initialize the store with an empty state
    Store.dispatch({ type: '@@INIT' });
    return Store;
}
