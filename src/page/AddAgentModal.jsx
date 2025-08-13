import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddAgentModal = ({ showModal, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    accountEnabled: true,
    commission: '30',
    rebate: '5',
    maxRebate: '0',
    totalAgent: false,
    superAgent: '',
    darkDeduction: false,
    darkDeductionTime: '5',
    darkDeductionAmount: '10',
    integralPlatform: false,
    singleSiteLanding: false,
    randomLanding: false,
    accountMember: false,
    memberOnly: false,
    onlineService: false,
    todayFree: false,
    chargeChannel: false,
    chargeInstant: false,
    cardSwitch: false,
    shareInstall: '0',
    adSwitch: false,
    appSwitch: false,
    appEncoding: false,
    appSeal: '',
    solidConfig: ''
  });

  if (!showModal) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggle = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      accountEnabled: true,
      commission: '30',
      rebate: '5',
      maxRebate: '0',
      totalAgent: false,
      superAgent: '',
      darkDeduction: false,
      darkDeductionTime: '5',
      darkDeductionAmount: '10',
      integralPlatform: false,
      singleSiteLanding: false,
      randomLanding: false,
      accountMember: false,
      memberOnly: false,
      onlineService: false,
      todayFree: false,
      chargeChannel: false,
      chargeInstant: false,
      cardSwitch: false,
      shareInstall: '0',
      adSwitch: false,
      appSwitch: false,
      appEncoding: false,
      appSeal: '',
      solidConfig: ''
    });
  };

  const ToggleSwitch = ({ checked, onChange }) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
      </label>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">添加代理</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="space-y-6">
            
            {/* Row 1: Username, Password, Account Enabled */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">*</span>
                  <label className="text-sm text-gray-700">登录名</label>
                </div>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="请输入登录名"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">*</span>
                  <label className="text-sm text-gray-700">密码</label>
                </div>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="请输入登录密码"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">账号可用</label>
                  <ToggleSwitch
                    checked={formData.accountEnabled}
                    onChange={() => handleToggle('accountEnabled')}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Commission settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <label className="text-sm text-gray-700">提成要素</label>
                <input
                  type="text"
                  value={formData.commission}
                  onChange={(e) => handleInputChange('commission', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">总代返利</label>
                <input
                  type="text"
                  value={formData.rebate}
                  onChange={(e) => handleInputChange('rebate', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">大总代返利</label>
                <input
                  type="text"
                  value={formData.maxRebate}
                  onChange={(e) => handleInputChange('maxRebate', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Row 3: Total Agent, Super Agent */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">总代</label>
                  <ToggleSwitch
                    checked={formData.totalAgent}
                    onChange={() => handleToggle('totalAgent')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">上级</label>
                <select 
                  value={formData.superAgent}
                  onChange={(e) => handleInputChange('superAgent', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm bg-white"
                >
                  <option value="">选择上级代理</option>
                </select>
              </div>
              <div className="col-span-4"></div>
            </div>

            {/* Row 4: Dark Deduction settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">暗扣</label>
                  <ToggleSwitch
                    checked={formData.darkDeduction}
                    onChange={() => handleToggle('darkDeduction')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">暗扣时间</label>
                <input
                  type="text"
                  value={formData.darkDeductionTime}
                  onChange={(e) => handleInputChange('darkDeductionTime', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">暗扣金额</label>
                <input
                  type="text"
                  value={formData.darkDeductionAmount}
                  onChange={(e) => handleInputChange('darkDeductionAmount', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Row 5: Platform settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">整合台面</label>
                  <ToggleSwitch
                    checked={formData.integralPlatform}
                    onChange={() => handleToggle('integralPlatform')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">单站落地</label>
                  <ToggleSwitch
                    checked={formData.singleSiteLanding}
                    onChange={() => handleToggle('singleSiteLanding')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">随机落地</label>
                  <ToggleSwitch
                    checked={formData.randomLanding}
                    onChange={() => handleToggle('randomLanding')}
                  />
                </div>
              </div>
            </div>

            {/* Row 6: Member settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">账号会员</label>
                  <ToggleSwitch
                    checked={formData.accountMember}
                    onChange={() => handleToggle('accountMember')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">仅限会员</label>
                  <ToggleSwitch
                    checked={formData.memberOnly}
                    onChange={() => handleToggle('memberOnly')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">在线客服</label>
                  <ToggleSwitch
                    checked={formData.onlineService}
                    onChange={() => handleToggle('onlineService')}
                  />
                </div>
              </div>
            </div>

            {/* Row 7: Charge settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">今日免费</label>
                  <ToggleSwitch
                    checked={formData.todayFree}
                    onChange={() => handleToggle('todayFree')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">收费密道</label>
                  <ToggleSwitch
                    checked={formData.chargeChannel}
                    onChange={() => handleToggle('chargeChannel')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">收费瞬时</label>
                  <ToggleSwitch
                    checked={formData.chargeInstant}
                    onChange={() => handleToggle('chargeInstant')}
                  />
                </div>
              </div>
            </div>

            {/* Row 8: Card and Share settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">卡片开关</label>
                  <ToggleSwitch
                    checked={formData.cardSwitch}
                    onChange={() => handleToggle('cardSwitch')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">分享安装</label>
                <input
                  type="text"
                  value={formData.shareInstall}
                  onChange={(e) => handleInputChange('shareInstall', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">广告开关</label>
                  <ToggleSwitch
                    checked={formData.adSwitch}
                    onChange={() => handleToggle('adSwitch')}
                  />
                </div>
              </div>
            </div>

            {/* Row 9: APP settings */}
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">APP开关</label>
                  <ToggleSwitch
                    checked={formData.appSwitch}
                    onChange={() => handleToggle('appSwitch')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">APP编码</label>
                  <ToggleSwitch
                    checked={formData.appEncoding}
                    onChange={() => handleToggle('appEncoding')}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <label className="text-sm text-gray-700">APP封印</label>
                <input
                  type="text"
                  value={formData.appSeal}
                  onChange={(e) => handleInputChange('appSeal', e.target.value)}
                  placeholder="APP封印选择"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Row 10: Solid Config */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <label className="text-sm text-gray-700">固体配置</label>
                <textarea
                  value={formData.solidConfig}
                  onChange={(e) => handleInputChange('solidConfig', e.target.value)}
                  placeholder="请输入JSON配置"
                  rows={4}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm resize-none"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgentModal;