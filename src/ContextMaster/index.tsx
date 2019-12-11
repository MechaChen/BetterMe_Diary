import React, { useContext, useReducer } from 'react';

interface Props {
    store: any;
    children: any;
}

const storeContext = React.createContext<any>({});

const useStore = () => {
    return useContext(storeContext);
};

const ContextMaster: React.FC<Props> = ({ store, children }) => {
    const [state, dispatch] = useReducer(store.reducer, store.containerState);

    return (
        <storeContext.Provider value={{ state, dispatch }}>
            {children}
        </storeContext.Provider>
    );
};

export { ContextMaster, useStore };
