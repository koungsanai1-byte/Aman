import React, { useState } from 'react';
import { Search, MoreHorizontal, Plus, Download, Upload, Settings, Eye, Link, BarChart, MoreVertical } from 'lucide-react';
import QRCodeModal from './QRCodeModal'; // Import the modal component
import AddAgentModal from './AddAgentModal'; // Import the add agent modal

const ComplexTable = () => {
  const [users, setUsers] = useState([
    { id: 1758, username: 'kk222', today: 0, yesterday: 0, total: 0, inviteCode: '629401', commission: '30', rebate: '5', node: '无', superior: 'hh084', status: true },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const toggleAllUsers = () => {
    setSelectedUsers(prev =>
      prev.length === users.length ? [] : users.map(user => user.id)
    );
  };

  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(user =>
      user.id === userId ? { ...user, status: !user.status } : user
    ));
  };

  const openQRModal = (user) => {
    setSelectedUser(user);
    setShowQRModal(true);
  };

  const closeQRModal = () => {
    setShowQRModal(false);
    setSelectedUser(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const handleAddAgent = (agentData) => {
    // Generate a new ID
    const newId = Math.max(...users.map(u => u.id)) + 1;
    
    // Create new user object
    const newUser = {
      id: newId,
      username: agentData.username,
      today: 0,
      yesterday: 0,
      total: 0,
      inviteCode: Math.random().toString().substr(2, 6), // Generate random invite code
      commission: agentData.commission,
      rebate: agentData.rebate,
      node: agentData.singleStation ? '已分配' : '无',
      superior: agentData.superLevel || 'root',
      status: agentData.isAvailable
    };

    // Add new user to the list
    setUsers(prev => [...prev, newUser]);
    console.log('New agent added:', newUser);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto">
        {/* Header Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">登录名</label>
              <input
                type="text"
                placeholder="请输入登录名"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">邀请码</label>
              <input
                type="text"
                placeholder="请输入邀请码"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">代理ID</label>
              <input
                type="text"
                placeholder="请输入代理ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">上级名</label>
              <input
                type="text"
                placeholder="上级代理登录名"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">单站落地</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>all-已分配 null-未分配</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">落地开关</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>落地开关</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">余额大于</label>
              <input
                type="text"
                placeholder="请输入余额金额"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">开APP</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>暂不开放</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2">
              <Search size={16} />
              搜索
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
              重置
            </button>
            <button 
              onClick={() => setShowAddAgentModal(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <Plus size={16} />
              新增代理
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === users.length}
                      onChange={toggleAllUsers}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">登录名</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">今日</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">昨日</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">余额</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">邀请码</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">要求</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">前缀</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">单站落地</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">上级</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">总代</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">开APP</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">开关</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">支付</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 flex items-center gap-2">
                      <button
                        onClick={() => openQRModal(user)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <Link size={14} />
                      </button>
                      {user.username}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.today}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.yesterday}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.total}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.inviteCode}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">{user.commission}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{user.rebate}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">选择游戏</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{user.node}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">{user.superior}</td>
                    <td className="px-4 py-3 text-sm text-gray-500"></td>
                    <td className="px-4 py-3 text-sm text-gray-500"></td>
                    <td className="px-4 py-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={user.status}
                          onChange={() => toggleUserStatus(user.id)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">选择通道</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700 text-sm">编辑</button>
                        <button className="text-blue-500 hover:text-blue-700 text-sm">链接</button>
                        <button className="text-blue-500 hover:text-blue-700 text-sm">替换</button>
                        <button className="text-red-500 hover:text-red-700 text-sm">2♦</button>
                        <MoreVertical size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QR Code Modal */}
        <QRCodeModal 
          showQRModal={showQRModal}
          selectedUser={selectedUser}
          onClose={closeQRModal}
          onCopyToClipboard={copyToClipboard}
        />

        {/* Add Agent Modal */}
        <AddAgentModal 
          showModal={showAddAgentModal}
          onClose={() => setShowAddAgentModal(false)}
          onSubmit={handleAddAgent}
        />
      </div>
    </div>
  );
};

export default ComplexTable;