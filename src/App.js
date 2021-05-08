import { useState } from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import EventTypes from "./components/EventTypes";
import Endpoints from "./components/Endpoints";
import Events from "./components/Events";
import Messages from "./components/Messages";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import ServiceDropdown from "./components/ServiceDropdown";

const navigation = [
  { name: "Home", path: "/", icon: HomeIcon, current: true },
  { name: "Users", path: "/users", icon: UsersIcon, current: false },
  {
    name: "Event Types",
    path: "/event_types",
    icon: CalendarIcon,
    current: false,
  },
  { name: "Endpoints", path: "/endpoints", icon: FolderIcon, current: false },
  { name: "Events", path: "/events", icon: CalendarIcon, current: false },
  { name: "Messages", path: "/messages", icon: InboxIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <MobileNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
        classNames={classNames}
      />
      <DesktopNav navigation={navigation} classNames={classNames} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="inline-block text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
              <div className="inline-block float-right">
                <ServiceDropdown />
              </div>
            </div>
            <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 md:px-8">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/event_types" component={EventTypes} />
                <Route path="/endpoints" component={Endpoints} />
                <Route path="/events" component={Events} />
                <Route path="/messages" component={Messages} />
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
