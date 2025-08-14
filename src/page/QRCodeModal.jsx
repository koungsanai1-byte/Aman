import React from 'react';
import { X } from 'lucide-react';

const QRCodeModal = ({ showQRModal, selectedUser, onClose, onCopyToClipboard }) => {
  if (!showQRModal || !selectedUser) return null;

  // ฟังก์ชันสร้าง URL ของ QR Code จาก API
  const generateQRCodeURL = (text) => {
    const encodedText = encodeURIComponent(text);
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedText}`;
  };

  // QR Code ของลิงก์ต้นฉบับ
  const baseLink = selectedUser.link || `https://example.com/${selectedUser.name}`;
  const qrImage = generateQRCodeURL(baseLink);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Original QR Code */}
        <div className="flex flex-col items-center border rounded-lg p-4 shadow-sm">
          <div className="w-48 h-48 flex items-center justify-center my-8 rounded">
            <img 
              src={qrImage} 
              alt="Original QR Code"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiPlFSIENvZGU8L3RleHQ+PC9zdmc+';
              }}
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span className="text-xs text-gray-600 truncate flex-1 mr-2">{baseLink}</span>
              <button
                onClick={() => onCopyToClipboard(baseLink)}
                className="text-green-500 hover:text-green-700 text-xs px-2 py-1 rounded bg-green-50 hover:bg-green-100"
              >
                ຄັດລອກ
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50 rounded-b-lg mt-4">
          <p className="text-xs text-gray-500 text-center">
            QR Code ຈາກ Original Link • ID: {selectedUser.id_link || selectedUser.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
