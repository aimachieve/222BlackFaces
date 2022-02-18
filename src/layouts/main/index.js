import { Outlet } from 'react-router-dom';
// material

// ----------------------------------------------------------------------

export default function MainLayout() {

  return (
    <>
      {/* <MainNavbar /> */}
      <div>
        <Outlet />
      </div>
      {/* <MainFooter /> */}
    </>
  );
}
