import { Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/UserActions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UserDropdown() {
  const currentService = useSelector((state) => state.currentService);
  const selected = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users[currentService.uuid]);
  const dispatch = useDispatch();

  const setSelected = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    dispatch(actions.setUser(user));
  };

  useEffect(() => {
    if (users) {
      let user = {};

      if (users.length > 0) {
        user = users[0];
      }

      localStorage.setItem('currentUser', JSON.stringify(user));
      dispatch(actions.setUser(user));
    }
  }, [dispatch, currentService.uuid]);

  if (!users) {
    return null;
  }

  return (
    <div className="w-48 max-w-xs">
      <Listbox value={selected.name} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              User
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  {users.map((user) => (
                    <Listbox.Option
                      key={user.uuid}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={user}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {user.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
