import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [submenuLocation, setSubmenuLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const openSubmenu = (text, location) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setSubmenuLocation(location);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => setIsSubmenuOpen(false);
    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        submenuLocation,
        page
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}