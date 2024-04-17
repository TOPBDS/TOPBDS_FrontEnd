// src/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './header/Header';
import { CssBaseline } from '@mui/material';
import SubHeader from './header/SubHeader';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <SubHeader />
      {children}
    </>
  );
};

export default Layout;