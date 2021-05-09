import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceDropdown from "./ServiceDropdown";
import UserDropdown from "./UserDropdown";
import Timeframe from "./Timeframe";
import * as actions from "../actions/UserActions";

const Header = ({ page }) => {
  const selected = useSelector((state) => state.currentService);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected.uuid) {
      console.log("Service changed, refreshing users!", selected.uuid);
      dispatch(actions.fetchUsers(selected.uuid));
    }
  }, [selected.uuid]);

  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-5">
      <div className="col-span-1 bg-white overflow-hidden">
        <dt className="text-sm font-medium text-gray-500"></dt>
        <dd className="mt-1">
          <h1 className="text-3xl font-semibold text-gray-900">{page}</h1>
        </dd>
      </div>
      <div className="col-span-1 bg-white overflow-hidden">
        <dt className="text-sm font-medium text-gray-500 truncate"></dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900"></dd>
      </div>
      <div className="col-span-1 bg-white overflow-hidden">
        <dt className="text-sm font-medium text-gray-500 truncate"></dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900"></dd>
      </div>
      <div className="col-span-1 bg-white overflow-hidden">
        <dt className="text-sm font-medium text-gray-500 truncate"></dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900"></dd>
      </div>
      <div className="col-span-1 bg-white">
        <dt className="text-sm font-medium text-gray-500 truncate"></dt>
        <dd className="mt-1">
          <ServiceDropdown />
        </dd>
      </div>
      <div className="col-span-1 bg-white">
        <dt className="text-sm font-medium text-gray-500 truncate"></dt>
        {/* <dd className="mt-1">
          <Timeframe />
        </dd> */}
        <dd className="mt-1">
          <UserDropdown />
        </dd>
      </div>
    </dl>
  );
};

export default Header;
