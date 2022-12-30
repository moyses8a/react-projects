import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSiebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => setIsSiebarOpen(true);
    const closeSidebar = () => setIsSiebarOpen(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal
    }}>
        {children}
    </AppContext.Provider>;
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext  );
}

export { AppContext, AppProvider };