import { Outlet } from "react-router";
import { Fragment } from "react/jsx-runtime";

export const ManagePatient = () => {
  // const loaderData = useLoaderData();
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}