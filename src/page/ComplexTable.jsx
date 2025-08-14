import React, { useState, useEffect } from 'react';
import { Search, Plus, Link as LinkIcon } from 'lucide-react';
import QRCodeModal from './QRCodeModal';
import AddAgentModal from './AddAgentModal';

const API_BASE = 'http://localhost:3000/api';

const ComplexTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // โหลดข้อมูลจาก API
  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setUsers(data || []);
    } catch (err) {
      console.error('โหลดข้อมูลล้มเหลว:', err);
      setError('ດຶງຂໍ້ມູນບໍ່ສຳເລັດ');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const toggleAllUsers = () => {
    setSelectedUsers((prev) =>
      prev.length === users.length ? [] : users.map((user) => user.id)
    );
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
  };

  const handleAddAgent = async (agentData) => {
    try {
      const res = await fetch(`${API_BASE}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: agentData.username,
          link: agentData.link || `https://example.com/${agentData.username}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'ບັນທຶກບໍ່ສຳເລັດ');
        return;
      }

      fetchUsers();
    } catch (error) {
      console.error('ບັນທຶກລົ້ມເຫຼວ:', error);
      alert('ເຊື່ອມຕໍ່ API ບໍ່ສຳເລັດ');
    }
  };

  // ฟิลเตอร์ค้นหา
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return ['name', 'link', 'id', 'id_link'].some((field) => {
      const value = user[field];
      return value && value.toString().toLowerCase().includes(term);
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto">
        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ຄົ້ນຫາຊື່ / ລິ້ງ / ID
          </label>
          <input
            type="text"
            placeholder="ພິມຄົ້ນຫາ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex gap-2">
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            ຣີເຟສ
          </button>
          <button
            onClick={() => setShowAddAgentModal(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2"
          >
            <Plus size={16} /> ສ້າງສະມາຊິກ
          </button>
        </div>

        {/* Loading / Error */}
        {loading && <div className="p-4 text-center text-gray-500">ກຳລັງໂຫຼດ...</div>}
        {error && <div className="p-4 text-center text-red-500">{error}</div>}

        {/* Data Table */}
        {!loading && !error && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead className="bg-gray-50 border-b border-gray-300">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={
                          selectedUsers.length > 0 &&
                          selectedUsers.length === users.length
                        }
                        onChange={toggleAllUsers}
                      />
                    </th>
                    <th className="w-16 px-4 py-3 text-sm font-medium text-gray-900 text-left">
                      ID
                    </th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-900 text-left">
                      ຊື່
                    </th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-900 text-left">
                      ລິ້ງ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="w-12 px-4 py-3">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => toggleUserSelection(user.id)}
                          />
                        </td>
                        <td className="w-16 px-4 py-3">{user.id_link || user.id}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openQRModal(user)}
                              className="text-gray-400 hover:text-blue-500 flex-shrink-0"
                            >
                              <LinkIcon size={14} />
                            </button>
                            <span className="truncate">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="text-blue-500 underline cursor-pointer block truncate"
                            onClick={() => copyToClipboard(user.link)}
                          >
                            {user.link}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4 text-gray-500">
                        ບໍ່ມີຂໍ້ມູນ
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
