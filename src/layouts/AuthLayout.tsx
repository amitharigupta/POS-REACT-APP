import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <aside>Auth Layout</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
