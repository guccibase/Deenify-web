import React, { useContext, useState } from 'react';

const SidebarContext = React.createContext();

export function useSidebar() {
	return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
	const [ active, setActive ] = useState('');

	const values = {
		setActive,
		active
	};

	return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>;
}
