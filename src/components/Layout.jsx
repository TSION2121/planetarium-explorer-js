import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import {
  LayoutWrapper,
  ContentWrapper,
  MainContent,
} from '../styles/layout.styles';


export default function Layout() {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </LayoutWrapper>
  );
}
