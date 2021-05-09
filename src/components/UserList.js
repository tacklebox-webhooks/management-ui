import { useDispatch, useSelector } from "react-redux";
import { formatDateTime } from "../lib/utils";

const UserList = ({ users }) => {
  if (!users) {
    return null;
  }

  return (
    <tbody>
      {users.map((user, userIdx) => (
        <tr
          key={user.uuid}
          className={userIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {formatDateTime(user.created_at, true)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {user.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            Endpoints
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            Events
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            Messages
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserList;
