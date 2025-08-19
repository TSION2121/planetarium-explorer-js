import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
