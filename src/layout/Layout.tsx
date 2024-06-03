// src/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './header/Header';
import { CssBaseline } from '@mui/material';
import SubHeader from './header/SubHeader';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <CssBaseline />
      <Header />
      {
        !pathname.includes("login") && !pathname.includes("register") && (
          <SubHeader />
        )
      }
      {children}
    </>
  );
};

export default Layout;