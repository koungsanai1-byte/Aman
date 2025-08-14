import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddAgentModal = ({ showModal, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    link: ''
  });

  if (!showModal) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.link) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">ສ້າງສະມາຊິກ</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="text-sm text-gray-700">ຊື່ຜູ້ໃຊ້</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="ປ້ອນຊື່ຜູ້ໃຊ້"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">ລິ້ງ</label>
            <input
              type="text"
              value={formData.link}
              onChange={(e) => handleInputChange('link', e.target.value)}
              placeholder="ປ້ອນລິ້ງ"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded"
          >
            取消
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgentModal;
