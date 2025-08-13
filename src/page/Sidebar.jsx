import React, { useState } from 'react';
import {
  Home,
  Settings,
  BarChart3,
  Users,
  FileText,
  Monitor,
  ShoppingCart,
  Cloud,
  Menu,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// A single, recursive component to render each menu item
const SidebarItem = ({ item, sidebarCollapsed, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const hasSubItems = item.subItems && item.subItems.length > 0;

  const handleClick = () => {
    // If the item has sub-items, toggle the dropdown state
    if (hasSubItems) {
      setIsOpen(!isOpen);
    } 
    // If it's a leaf item (no sub-items) and has a path, navigate
    else if (item.path) {
      navigate(item.path);
    }
  };

  // Determine if the current item is active or any of its sub-items are
  const isActive = item.path === location.pathname || (hasSubItems && item.subItems.some(subItem => subItem.path === location.pathname));
  // Check if a nested item is active
  const isNestedActive = hasSubItems && item.subItems.some(subItem => subItem.subItems && subItem.subItems.some(nestedSubItem => nestedSubItem.path === location.pathname));


  return (
    <div>
      {/* Menu Item Link/Button */}
      <div
        className={`flex items-center p-3 rounded cursor-pointer transition-colors duration-200
          ${isActive || isNestedActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-white'}
          ${level > 0 ? `ml-${4 * level} text-sm` : ''}
          ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          {item.icon && React.createElement(item.icon, { className: `w-5 h-5 ${level > 0 ? 'ml-2' : ''}`})}
          {!sidebarCollapsed && <span className={`${item.icon ? 'ml-3' : 'ml-6'}`}>{item.label}</span>}
        </div>

        {/* Dropdown Chevron */}
        {!sidebarCollapsed && hasSubItems && (
          isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        )}
      </div>

      {/* Recursive Dropdown Submenu */}
      {hasSubItems && !sidebarCollapsed && isOpen && (
        <div className="mt-1 space-y-1">
          {item.subItems.map((subItem, index) => (
            <SidebarItem
              key={subItem.key || index}
              item={subItem}
              sidebarCollapsed={sidebarCollapsed}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: 'home',
      icon: Home,
      label: '首页',
      path: '/dashboard',
    }
  ];
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen transition-all duration-300 bg-slate-800 text-white p-4 z-50 overflow-y-auto ${sidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-yellow-500 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold">龙</span>
          </div>
          {!sidebarCollapsed && <span className="font-bold">龙霸门禽</span>}
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.key}
              item={item}
              sidebarCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`min-h-screen flex-1 transition-all duration-300 ml-16 ${!sidebarCollapsed && 'lg:ml-64'
        } p-6`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-200 rounded"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <span className="text-gray-500">首页</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">首页</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded">我的Q空间</button>
          </div>
        </div>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;