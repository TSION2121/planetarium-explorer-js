import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { LayoutWrapper, MainContent } from '../styles/layout.styles';

const Layout = ({ mode, setMode }) => {
  return (
    <LayoutWrapper>
      <Sidebar setMode={setMode} />
      <div style={{ flexGrow: 1 }}>
        <TopBar mode={mode} setMode={setMode} />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
