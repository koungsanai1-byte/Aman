import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';
const Content = () => {
    // Sample data for charts
    const orderData = [
        { day: 0, today: 0, yesterday: 25, dayBefore: 0 },
        { day: 1, today: 0, yesterday: 0, dayBefore: 0 },
        { day: 2, today: 130, yesterday: 90, dayBefore: 0 },
        { day: 3, today: 60, yesterday: 50, dayBefore: 0 },
        { day: 4, today: 70, yesterday: 65, dayBefore: 0 },
        { day: 5, today: 75, yesterday: 70, dayBefore: 0 },
        { day: 6, today: 80, yesterday: 75, dayBefore: 0 },
        { day: 7, today: 85, yesterday: 80, dayBefore: 0 },
        { day: 8, today: 75, yesterday: 85, dayBefore: 0 },
        { day: 9, today: 100, yesterday: 95, dayBefore: 0 },
        { day: 10, today: 85, yesterday: 100, dayBefore: 0 },
        { day: 11, today: 110, yesterday: 85, dayBefore: 0 },
        { day: 12, today: 105, yesterday: 110, dayBefore: 0 },
        { day: 13, today: 100, yesterday: 105, dayBefore: 0 },
        { day: 14, today: 95, yesterday: 100, dayBefore: 0 },
        { day: 15, today: 110, yesterday: 95, dayBefore: 0 },
        { day: 16, today: 75, yesterday: 110, dayBefore: 0 },
        { day: 17, today: 50, yesterday: 75, dayBefore: 0 },
        { day: 18, today: 55, yesterday: 50, dayBefore: 0 },
        { day: 19, today: 65, yesterday: 55, dayBefore: 0 },
        { day: 20, today: 180, yesterday: 65, dayBefore: 0 },
        { day: 21, today: 175, yesterday: 180, dayBefore: 0 },
        { day: 22, today: 170, yesterday: 175, dayBefore: 0 },
        { day: 23, today: 0, yesterday: 170, dayBefore: 0 },
    ];

    const visitData = [
        { day: 0, today: 220, yesterday: 650, dayBefore: 0 },
        { day: 1, today: 50, yesterday: 350, dayBefore: 0 },
        { day: 2, today: 25, yesterday: 250, dayBefore: 0 },
        { day: 3, today: 25, yesterday: 200, dayBefore: 0 },
        { day: 4, today: 25, yesterday: 220, dayBefore: 0 },
        { day: 5, today: 25, yesterday: 250, dayBefore: 0 },
        { day: 6, today: 25, yesterday: 320, dayBefore: 0 },
        { day: 7, today: 25, yesterday: 300, dayBefore: 0 },
        { day: 8, today: 25, yesterday: 320, dayBefore: 0 },
        { day: 9, today: 25, yesterday: 350, dayBefore: 0 },
        { day: 10, today: 25, yesterday: 320, dayBefore: 0 },
        { day: 11, today: 25, yesterday: 340, dayBefore: 0 },
        { day: 12, today: 25, yesterday: 480, dayBefore: 0 },
        { day: 13, today: 25, yesterday: 450, dayBefore: 0 },
        { day: 14, today: 25, yesterday: 420, dayBefore: 0 },
        { day: 15, today: 25, yesterday: 400, dayBefore: 0 },
        { day: 16, today: 25, yesterday: 350, dayBefore: 0 },
        { day: 17, today: 25, yesterday: 250, dayBefore: 0 },
        { day: 18, today: 300, yesterday: 280, dayBefore: 0 },
        { day: 19, today: 450, yesterday: 350, dayBefore: 0 },
        { day: 20, today: 580, yesterday: 420, dayBefore: 0 },
        { day: 21, today: 550, yesterday: 580, dayBefore: 0 },
        { day: 22, today: 520, yesterday: 550, dayBefore: 0 },
        { day: 23, today: 0, yesterday: 520, dayBefore: 0 },
    ];
    return (
        <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-yellow-100 mb-2">今日收入</p>
                            <p className="text-3xl font-bold">¥264</p>
                            <p className="text-yellow-100 text-sm">订单 32</p>
                        </div>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">$</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-yellow-100 mb-2">昨日收入</p>
                            <p className="text-3xl font-bold">¥17312</p>
                            <p className="text-yellow-100 text-sm">订单 1831</p>
                        </div>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">$</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 mb-2">今日新用户</p>
                            <p className="text-3xl font-bold">¥27</p>
                            <p className="text-green-100 text-sm">订单 4</p>
                        </div>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">$</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 mb-2">昨日新用户</p>
                            <p className="text-3xl font-bold">¥4894</p>
                            <p className="text-green-100 text-sm">订单 461</p>
                        </div>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">$</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-8">
                {/* Visits Chart */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">访问</h3>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                                <span>今天</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                                <span>昨天</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                                <span>前天</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={visitData}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Area
                                    type="monotone"
                                    dataKey="yesterday"
                                    stackId="1"
                                    stroke="#60a5fa"
                                    fill="#dbeafe"
                                    fillOpacity={0.6}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="today"
                                    stackId="2"
                                    stroke="#fb923c"
                                    fill="#fed7aa"
                                    fillOpacity={0.6}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Broadcast Chart */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">播放量</h3>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                                <span>今天</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                                <span>昨天</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                                <span>前天</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={orderData}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Area
                                    type="monotone"
                                    dataKey="yesterday"
                                    stackId="1"
                                    stroke="#60a5fa"
                                    fill="#dbeafe"
                                    fillOpacity={0.6}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="today"
                                    stackId="2"
                                    stroke="#fb923c"
                                    fill="#fed7aa"
                                    fillOpacity={0.6}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Notice Section */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">提醒:</h3>
                    <div className="text-red-500 space-y-2 text-sm">
                        <p>1.访问量暴涨，订单下降，请检查监控和监播通道</p>
                        <p>2.访问量、访问时间下降请检查监控广告链路用来，服务器时间间，落地域名用来</p>
                        <p>3.请及时代表本用户在线发</p>
                    </div>
                </div>

                {/* Top Downloads */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">访问量下降 TOP10</h3>
                    <div className="grid grid-cols-7 gap-6">
                        {/* Column 0 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">0</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-25</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-17</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>pingrangt001</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>huan1</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>bbbb6666</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>mengmei001</span><span className="text-red-500">-6</span></div>
                                <div className="flex justify-between"><span>先充先得</span><span className="text-red-500">-6</span></div>
                                <div className="flex justify-between"><span>3258369</span><span className="text-red-500">-6</span></div>
                                <div className="flex justify-between"><span>AD530</span><span className="text-red-500">-3</span></div>
                            </div>
                        </div>

                        {/* Column 1 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">1</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-11</span></div>
                                <div className="flex justify-between"><span>tuanjie001</span><span className="text-red-500">-6</span></div>
                                <div className="flex justify-between"><span>zcc1277</span><span className="text-red-500">-5</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-5</span></div>
                                <div className="flex justify-between"><span>pingrangt001</span><span className="text-red-500">-5</span></div>
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-5</span></div>
                                <div className="flex justify-between"><span>tf123</span><span className="text-red-500">-4</span></div>
                                <div className="flex justify-between"><span>AD888</span><span className="text-red-500">-4</span></div>
                                <div className="flex justify-between"><span>6688aa</span><span className="text-red-500">-4</span></div>
                                <div className="flex justify-between"><span>xx8899</span><span className="text-red-500">-4</span></div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">2</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-19</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>luju112233</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>huan5</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>tuanjie001</span><span className="text-red-500">-7</span></div>
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-5</span></div>
                                <div className="flex justify-between"><span>zcc1277</span><span className="text-red-500">-4</span></div>
                                <div className="flex justify-between"><span>妹51</span><span className="text-red-500">-3</span></div>
                                <div className="flex justify-between"><span>AD540</span><span className="text-red-500">-3</span></div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">3</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-37</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-27</span></div>
                                <div className="flex justify-between"><span>huan1</span><span className="text-red-500">-16</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-18</span></div>
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-10</span></div>
                                <div className="flex justify-between"><span>qwe123</span><span className="text-red-500">-9</span></div>
                                <div className="flex justify-between"><span>adang11</span><span className="text-red-500">-7</span></div>
                                <div className="flex justify-between"><span>q5119</span><span className="text-red-500">-7</span></div>
                                <div className="flex justify-between"><span>qqqq9527</span><span className="text-red-500">-7</span></div>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">4</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-51</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-37</span></div>
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-31</span></div>
                                <div className="flex justify-between"><span>huan1</span><span className="text-red-500">-18</span></div>
                                <div className="flex justify-between"><span>qwe123</span><span className="text-red-500">-12</span></div>
                                <div className="flex justify-between"><span>tuanjie001</span><span className="text-red-500">-10</span></div>
                                <div className="flex justify-between"><span>妹51</span><span className="text-red-500">-9</span></div>
                                <div className="flex justify-between"><span>454797</span><span className="text-red-500">-9</span></div>
                                <div className="flex justify-between"><span>HCq666666</span><span className="text-red-500">-7</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-6</span></div>
                            </div>
                        </div>

                        {/* Column 5 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">5</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-70</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-23</span></div>
                                <div className="flex justify-between"><span>huan1</span><span className="text-red-500">-20</span></div>
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-15</span></div>
                                <div className="flex justify-between"><span>qwe123</span><span className="text-red-500">-14</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-11</span></div>
                                <div className="flex justify-between"><span>tf123</span><span className="text-red-500">-9</span></div>
                                <div className="flex justify-between"><span>tuanjie001</span><span className="text-red-500">-8</span></div>
                                <div className="flex justify-between"><span>HCq666666</span><span className="text-red-500">-2</span></div>
                                <div className="flex justify-between"><span>AD540</span><span className="text-red-500">-6</span></div>
                            </div>
                        </div>

                        {/* Column 6 */}
                        <div className="space-y-2">
                            <div className="text-center bg-gray-800 text-white py-1 rounded">6</div>
                            <div className="text-xs space-y-1">
                                <div className="flex justify-between"><span>adang1</span><span className="text-red-500">-52</span></div>
                                <div className="flex justify-between"><span>adang2</span><span className="text-red-500">-14</span></div>
                                <div className="flex justify-between"><span>yhx</span><span className="text-red-500">-21</span></div>
                                <div className="flex justify-between"><span>594929</span><span className="text-red-500">-15</span></div>
                                <div className="flex justify-between"><span>tuanjie001</span><span className="text-red-500">-18</span></div>
                                <div className="flex justify-between"><span>妹51</span><span className="text-red-500">-14</span></div>
                                <div className="flex justify-between"><span>q5119</span><span className="text-red-500">-11</span></div>
                                <div className="flex justify-between"><span>HCq666666</span><span className="text-red-500">-10</span></div>
                                <div className="flex justify-between"><span>qwe123</span><span className="text-red-500">-9</span></div>
                                <div className="flex justify-between"><span>huan1</span><span className="text-red-500">-9</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Channel Success Rate */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">通道成功率</h3>
                    <div className="grid grid-cols-8 gap-4 mb-6">
                        {[
                            {
                                id: 0, rate: "2650%", success: "70%", items: [
                                    "大宗支付宝: 109.35 76%",
                                    "大宗支付宝8005: 30.5 86%",
                                    "远洋支付: 22.7 76%",
                                    "全国网信宣传: 10.12 45%",
                                    "皇夏网信宣传: 4.10 29%",
                                    "皇夏支付宝: 1.4 20%",
                                    "敬爱支付宝: 3.4 43%",
                                    "未来支付大额: 7.2 78%"
                                ]
                            },
                            {
                                id: 1, rate: "1950%", success: "67%", items: [
                                    "大宗支付宝: 79.18 81%",
                                    "宛宗支付: 22.14 61%",
                                    "全国网信宣传: 9.14 39%",
                                    "皇夏支付宝: 4.2 67%",
                                    "敬爱网信宣传: 1.1 50%",
                                    "敬爱支付宝: 6.9 40%",
                                    "大宗支付宝8005: 4.0 100%",
                                    "未来支付大额: 4.1 80%"
                                ]
                            },
                            {
                                id: 2, rate: "1190%", success: "81%", items: [
                                    "大宗支付宝: 67.10 87%",
                                    "远洋支付: 8.1 89%",
                                    "敬爱网信宣传: 6.0 100%",
                                    "全国网信宣传: 4.5 44%",
                                    "皇夏网信宣传: 2.1 67%",
                                    "敬爱支付宝: 3.1 75%",
                                    "大宗支付宝8005: 5.1 83%",
                                    "皇夏支付宝: 3.0 100%"
                                ]
                            },
                            {
                                id: 3, rate: "770%", success: "70%", items: [
                                    "大宗支付宝: 36.10 78%",
                                    "远洋支付: 8.3 73%",
                                    "敬爱网信宣传: 0.4 67%",
                                    "全国网信宣传: 2.1 67%",
                                    "大宗支付宝8005: 3.1 75%",
                                    "敬爱支付宝: 2.0 100%",
                                    "皇夏支付宝: 1.2 33%",
                                    "皇夏网信宣传: 1.5 40%"
                                ]
                            },
                            {
                                id: 4, rate: "1160%", success: "82%", items: [
                                    "大宗支付宝: 49.11 82%",
                                    "远洋支付: 9.3 75%",
                                    "全国网信宣传: 5.1 33%",
                                    "大宗支付宝8005: 2.2 50%",
                                    "未来支付大额: 2.0 100%",
                                    "敬爱支付宝: 0.8 0%",
                                    "皇夏网信宣传: 3.5 38%",
                                    "皇夏支付宝: 1.1 50%"
                                ]
                            },
                            {
                                id: 5, rate: "1050%", success: "64%", items: [
                                    "大宗支付宝: 57.15 79%",
                                    "未来支付大额: 1.0 100%",
                                    "远洋支付: 5.1 33%",
                                    "皇夏支付宝: 1.2 33%",
                                    "大宗支付宝8005: 5.2 71%",
                                    "敬爱支付宝: 1.1 37%",
                                    "敬爱网信宣传: 0.2 0%",
                                    "皇夏网信宣传: 2.0 100%"
                                ]
                            },
                            {
                                id: 6, rate: "1190%", success: "66%", items: [
                                    "大宗支付宝: 59.13 82%",
                                    "远洋支付: 9.1 90%",
                                    "全国网信宣传: 0.2 0%",
                                    "皇夏网信宣传: 4.3 57%",
                                    "未来支付大额: 0.1 0%",
                                    "敬爱支付宝: 3.5 38%",
                                    "大宗支付宝8005: 0.2 0%",
                                    "敬爱网信宣传: 0.2 0%"
                                ]
                            },
                            {
                                id: 7, rate: "1150%", success: "78%", items: [
                                    "大宗支付宝: 62.8 89%",
                                    "远洋支付: 15.3 63%",
                                    "全国网信宣传: 5.9 36%",
                                    "皇夏网信宣传: 2.0 100%",
                                    "皇夏支付宝: 2.2 50%",
                                    "敬爱支付宝: 1.2 33%",
                                    "未来支付大额: 10.0 100%",
                                    "敬爱网信宣传: 0.1 0%"
                                ]
                            }
                        ].map((channel) => (
                            <div key={channel.id} className="space-y-2">
                                <div className="text-center bg-gray-800 text-white py-1 rounded text-sm">{channel.id}</div>
                                <div className="text-center">
                                    <div className="text-blue-600 font-semibold text-sm">{channel.rate}</div>
                                    <div className="text-xs">成功率: <span className="text-blue-600">{channel.success}</span></div>
                                </div>
                                <div className="text-xs space-y-1">
                                    {channel.items.map((item, idx) => (
                                        <div key={idx} className="text-gray-600 leading-tight">{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Extended channels 8-23 with 0% rates */}
                    <div className="grid grid-cols-16 gap-2">
                        {Array.from({ length: 16 }, (_, i) => i + 8).map((id) => (
                            <div key={id} className="text-center space-y-1">
                                <div className="bg-gray-800 text-white py-1 rounded text-xs">{id}</div>
                                <div className="text-blue-600 text-xs">0% 成功率: 0%</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Tables */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Today's Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">今日数量</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 border-b pb-2">
                                <div>名目</div>
                                <div>数量</div>
                                <div>金额</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>总收入</div>
                                <div>1280</div>
                                <div>12505</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>不扣金额</div>
                                <div>1064</div>
                                <div>10859</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>扣扣金额</div>
                                <div>216</div>
                                <div>1646</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>提现</div>
                                <div>7</div>
                                <div>2915</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>APP收入</div>
                                <div>0</div>
                                <div>0</div>
                            </div>
                        </div>

                        <h4 className="text-blue-600 font-semibold mt-6 mb-4">通道数量</h4>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700 border-b pb-2">
                                <div>通道</div>
                                <div>数量</div>
                                <div>金额</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>大宗支付宝</div>
                                <div>840</div>
                                <div>7085</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>远洋支付</div>
                                <div>202</div>
                                <div>2090</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>全国网信宣传</div>
                                <div>62</div>
                                <div>1303</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>大宗支付宝8005</div>
                                <div>60</div>
                                <div>620</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>皇夏网信宣传</div>
                                <div>30</div>
                                <div>555</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>敬爱支付宝</div>
                                <div>28</div>
                                <div>243</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>皇夏支付宝</div>
                                <div>22</div>
                                <div>206</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>未来支付大额</div>
                                <div>25</div>
                                <div>202</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>敬爱网信H5攻略</div>
                                <div>11</div>
                                <div>201</div>
                            </div>
                        </div>
                    </div>

                    {/* Yesterday's Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">昨日数量</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 border-b pb-2">
                                <div>名目</div>
                                <div>数量</div>
                                <div>金额</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>总收入</div>
                                <div>2292</div>
                                <div>22206</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>不扣金额</div>
                                <div>1831</div>
                                <div>17312</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>扣扣金额</div>
                                <div>461</div>
                                <div>4894</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>提现</div>
                                <div>16</div>
                                <div>7891</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>APP收入</div>
                                <div>0</div>
                                <div>0</div>
                            </div>
                        </div>

                        <h4 className="text-blue-600 font-semibold mt-6 mb-4">通道数量</h4>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700 border-b pb-2">
                                <div>通道</div>
                                <div>数量</div>
                                <div>金额</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>大宗支付宝</div>
                                <div>1299</div>
                                <div>11212</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>远洋支付</div>
                                <div>422</div>
                                <div>3745</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>全国网信宣传</div>
                                <div>101</div>
                                <div>1655</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>大宗支付宝8005</div>
                                <div>151</div>
                                <div>1332</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>敬爱支付宝</div>
                                <div>149</div>
                                <div>1268</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>皇夏网信宣传</div>
                                <div>49</div>
                                <div>1004</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>敬爱网信H5攻略</div>
                                <div>31</div>
                                <div>627</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>新未一直口</div>
                                <div>10</div>
                                <div>509</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>皇夏支付宝</div>
                                <div>41</div>
                                <div>465</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>未来支付大额</div>
                                <div>39</div>
                                <div>389</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOP20 Tables */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Today's TOP20 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">今日TOP20</h3>
                        <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 border-b pb-2 text-sm">
                                <div>代理</div>
                                <div>金额</div>
                                <div>代理</div>
                            </div>
                            {[
                                { rank: 1, agent: 'adang1', amount: '¥1524', rank2: 1, agent2: 'adang1', amount2: '¥2596' },
                                { rank: 2, agent: '594929', amount: '¥765', rank2: 2, agent2: '594929', amount2: '¥1504' },
                                { rank: 3, agent: 'adang2', amount: '¥708', rank2: 3, agent2: 'adang2', amount2: '¥1396' },
                                { rank: 4, agent: 'qwe123', amount: '¥582', rank2: 4, agent2: 'qwe123', amount2: '¥1186' },
                                { rank: 5, agent: 'q5119', amount: '¥449', rank2: 5, agent2: '6688aa', amount2: '¥678' },
                                { rank: 6, agent: 'Hcq666666', amount: '¥421', rank2: 6, agent2: '454797', amount2: '¥672' },
                                { rank: 7, agent: 'tf123', amount: '¥395', rank2: 7, agent2: 'tf123', amount2: '¥592' },
                                { rank: 8, agent: '妹51', amount: '¥360', rank2: 8, agent2: 'kk369', amount2: '¥577' },
                                { rank: 9, agent: 'kk369', amount: '¥332', rank2: 9, agent2: 'yhx', amount2: '¥563' },
                                { rank: 10, agent: 'tuanjie001', amount: '¥314', rank2: 10, agent2: 'zcc1277', amount2: '¥550' },
                                { rank: 11, agent: 'liju112233', amount: '¥312', rank2: 11, agent2: 'huan1', amount2: '¥448' },
                                { rank: 12, agent: 'qqqq9527', amount: '¥284', rank2: 12, agent2: 'qqqq9527', amount2: '¥448' },
                                { rank: 13, agent: 'kkkk9527', amount: '¥286', rank2: 13, agent2: 'tuanjie001', amount2: '¥441' },
                                { rank: 14, agent: 'kk231', amount: '¥248', rank2: 14, agent2: 'dongjing001', amount2: '¥380' },
                                { rank: 15, agent: '6688aa', amount: '¥246', rank2: 15, agent2: 'Hcq666666', amount2: '¥336' },
                                { rank: 16, agent: 'pingrang001', amount: '¥231', rank2: 16, agent2: 'huan5', amount2: '¥316' },
                                { rank: 17, agent: 'huan1', amount: '¥220', rank2: 17, agent2: 'AD530', amount2: '¥309' },
                                { rank: 18, agent: 'aa6688', amount: '¥214', rank2: 18, agent2: '妹51', amount2: '¥300' },
                                { rank: 19, agent: 'a966967133', amount: '¥196', rank2: 19, agent2: 'shouer001', amount2: '¥291' },
                                { rank: 20, agent: 'yhjx1', amount: '¥184', rank2: 20, agent2: 'AD540', amount2: '¥277' }
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-6 gap-2 text-xs py-1 border-b border-gray-100">
                                    <div className="text-gray-500">{row.rank}</div>
                                    <div>{row.agent}</div>
                                    <div className="text-blue-600">{row.amount}</div>
                                    <div className="text-gray-500">{row.rank2}</div>
                                    <div>{row.agent2}</div>
                                    <div className="text-blue-600">{row.amount2}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Yesterday's TOP20 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">昨日TOP20</h3>
                        <div className="text-sm text-gray-600">
                            Similar structure to today's TOP20 with yesterday's data...
                        </div>
                    </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">消息公告</h3>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 border-b pb-2">
                            <div>编号</div>
                            <div>标题</div>
                            <div>时间</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b border-gray-100">
                            <div>1</div>
                            <div className="text-red-600">[重要] 特别通知</div>
                            <div>2025-06-01 14:31:59</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;