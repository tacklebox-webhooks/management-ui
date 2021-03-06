import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceDropdown from './ServiceDropdown';
import UserDropdown from './UserDropdown';
import GridItem from './GridItem';
import Timeframe from './Timeframe';
import * as userActions from '../actions/UserActions';

const userDropdownPages = ['Endpoints', 'Events', 'Messages'];
const timeframePages = ['Dashboard'];

const Header = ({ page }) => {
  const currentService = useSelector((state) => state.currentService);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentService.uuid) {
      dispatch(userActions.fetchUsers(currentService.uuid));
    }
  }, [dispatch, currentService.uuid]);

  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-5">
      <div className="col-span-1 bg-gray-100 overflow-hidden">
        <dt className="text-sm font-medium text-gray-500"></dt>
        <dd className="mt-1">
          <h1 className="text-3xl font-semibold text-gray-900">{page}</h1>
        </dd>
      </div>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem Component={ServiceDropdown} />
      {userDropdownPages.includes(page) ? (
        <GridItem Component={UserDropdown} />
      ) : null}
      {timeframePages.includes(page) ? (
        <GridItem Component={Timeframe} />
      ) : null}
    </dl>
  );
};

export default Header;
