import React from 'react';
import { X } from 'lucide-react';
import QRcode_five from "../../public/image_5.png";
import QRcode_six from "../../public/image_6.png";

const QRCodeModal = ({ showQRModal, selectedUser, onClose, onCopyToClipboard }) => {
  if (!showQRModal || !selectedUser) return null;

  // Mock QR Code data for demonstration
  const generateQRCodeData = (username, inviteCode) => ({
    common: [
      {
        title: '微信超级防封链接①',
        url: `http://2.ygt.tjsbfgzc.com/s/6VKTdFZE/*/,pwQ1ItUzhXbXlDVnVDQUxDdzZCbVE9PQ.css`,
        qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
      },
      {
        title: '微信超级防封链接②',
        url: `http://hpk.fff.haosz888.cn/X8i/*ff*?d=aHR0cDovL3A4OXRmLnhkemllbHYuY24vYS82Mjk0MDE/dD0xNzU0Mzk3NjEwNDYx&bo7`,
        qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
      },
      {
        title: '微信跳转浏览器③',
        url: `http://t.cn/A6Fuuu37`,
        qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
      },
      {
        title: '微信超级防封链接④',
        url: `http://iwiqpj.cn/a/629401?m3zY`,
        qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
      }
    ],
    original: {
      title: '链接1',
      url: `http://iwqpi.cn/a/${inviteCode}?m3zY`,
      qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
    },
    browser: {
      title: '链接1',
      url: 'zv79.cc',
      qrImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' // Placeholder
    }
  });

  const qrData = generateQRCodeData(selectedUser.username, selectedUser.inviteCode);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{selectedUser.username} 推广链接</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* 通用链接 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-lg font-medium">通用链接</h3>
            </div>
          </div>

          {/* 原始链接 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <h3 className="text-lg font-medium">原始链接</h3>
            </div>
            <div className="rounded-lg p-4 max-w-md shadow-xl">
              <h4 className="text-sm font-medium mb-3">{qrData.original.title}</h4>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 flex items-center justify-center mb-3">
                  <img src={QRcode_five} alt="QR Code" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-600 truncate flex-1 mr-2">{qrData.original.url}</span>
                    <button
                      onClick={() => onCopyToClipboard(qrData.original.url)}
                      className="text-blue-500 hover:text-blue-700 text-xs"
                    >
                      复制
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 浏览器链接 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-lg font-medium">浏览器链接</h3>
            </div>
            <div className="rounded-lg p-4 max-w-md shadow-xl">
              <h4 className="text-sm font-medium mb-3">{qrData.browser.title}</h4>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 flex items-center justify-center mb-3">
                  <img src={QRcode_six} alt="QR Code" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-600 truncate flex-1 mr-2">{qrData.browser.url}</span>
                    <button
                      onClick={() => onCopyToClipboard(qrData.browser.url)}
                      className="text-blue-500 hover:text-blue-700 text-xs"
                    >
                      复制
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;