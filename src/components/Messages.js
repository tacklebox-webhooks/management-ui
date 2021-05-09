// import { messages } from "../lib/db";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { formatDateTime } from "../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/MessageActions";

export default function Messages() {
  const currentService = useSelector((state) => state.currentService);
  const currentUser = useSelector((state) => state.currentUser);
  const messages = useSelector((state) => state.messages[currentUser.uuid]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.uuid || !currentService.uuid) {
      return;
    }
    console.log("Fetching messages list");
    dispatch(actions.fetchMessages(currentService.uuid, currentUser.uuid));
  }, [dispatch, currentUser.uuid]);

  if (!messages) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Timestamp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      URL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Event Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message, messageIdx) => (
                    <tr
                      key={message.uuid}
                      className={
                        messageIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatDateTime(message.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {message.endpoint}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        todo_created
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {message.status_code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <CheckCircleIcon
                          className={
                            message.delivered
                              ? "h-6 w-6 text-green-600"
                              : "h-6 w-6 text-red-600"
                          }
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        Resend
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
