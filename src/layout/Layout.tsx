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
  const element = pathname.split("/")[1];

  return (
    <>
      <CssBaseline />
      {
        !pathname.includes("payment") && (
          <Header />
        )
      }
      {
        !pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("payment") &&
        !pathname.includes("report") && (
          <SubHeader />
        )
      }
      {children}
    </>
  );
};

export default Layout;