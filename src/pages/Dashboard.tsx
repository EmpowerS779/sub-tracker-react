import React from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';

interface Subscription {
  id: number;
  name: string;
  price: number;
  billingCycle: string;
  nextPayment: string;
}

function Dashboard() {
  const subscriptions: Subscription[] = [
    {
      id: 1,
      name: 'Netflix',
      price: 15.99,
      billingCycle: 'Monthly',
      nextPayment: '2024-04-15',
    },
    {
      id: 2,
      name: 'Spotify',
      price: 9.99,
      billingCycle: 'Monthly',
      nextPayment: '2024-04-10',
    },
    {
      id: 3,
      name: 'Adobe Creative Cloud',
      price: 52.99,
      billingCycle: 'Monthly',
      nextPayment: '2024-04-20',
    },
  ];

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            My Subscriptions
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Subscription
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Monthly Overview</h3>
          <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-md">
            <CreditCard className="h-5 w-5 text-indigo-500 mr-2" />
            <span className="text-indigo-700 font-medium">${totalMonthly.toFixed(2)}/month</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Billing Cycle
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Next Payment
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {subscriptions.map((subscription) => (
                        <tr key={subscription.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {subscription.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${subscription.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {subscription.billingCycle}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {subscription.nextPayment}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-5 w-5" />
                            </button>
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
      </div>
    </div>
  );
}

export default Dashboard;