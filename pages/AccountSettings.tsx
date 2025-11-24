import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { Button } from '../components/Button';
import { User as UserIcon, Building, CreditCard, Bell, Shield, Save } from 'lucide-react';

interface AccountSettingsProps {
  user: User;
}

export const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-8">Account Settings / Instellingen</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
               <nav className="flex flex-col">
                  {[
                    { id: 'profile', label: 'Profile & Business', icon: <UserIcon size={18} /> },
                    { id: 'payment', label: user.role === UserRole.OWNER ? 'Payout Settings' : 'Payment Methods', icon: <CreditCard size={18} /> },
                    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
                    { id: 'security', label: 'Privacy & Security', icon: <Shield size={18} /> },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === item.id 
                          ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600' 
                          : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900 border-l-4 border-transparent'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
               </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-stone-200 p-6 md:p-8">
             
             {/* PROFILE TAB */}
             {activeTab === 'profile' && (
               <div className="space-y-6">
                 <div>
                   <h2 className="text-xl font-bold text-stone-900 mb-1">Business Information</h2>
                   <p className="text-sm text-stone-500">Mandatory for Dutch compliance (KVK, VAT).</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-stone-700 mb-1">Business Name / Bedrijfsnaam</label>
                       <input type="text" defaultValue={user.businessName} className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-stone-700 mb-1">KVK Number</label>
                       <input type="text" defaultValue={user.kvkNumber} className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-stone-700 mb-1">VAT Number / BTW-nummer</label>
                       <input type="text" placeholder="NL..." className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border" />
                    </div>
                    {user.role === UserRole.ENTREPRENEUR && (
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Cuisine Type</label>
                        <select className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border">
                          <option>Plant-Based</option>
                          <option>Bakery / Pastry</option>
                          <option>Catering (General)</option>
                          <option>Street Food</option>
                        </select>
                      </div>
                    )}
                 </div>

                 <div className="border-t border-stone-200 pt-6">
                    <h2 className="text-xl font-bold text-stone-900 mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                          <input type="text" defaultValue={user.name} className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number (NL)</label>
                          <input type="text" placeholder="+31 6 12345678" className="w-full rounded-md border-stone-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-2 px-3 border" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                          <input type="email" disabled defaultValue="user@example.com" className="w-full rounded-md border-stone-200 bg-stone-50 text-stone-500 shadow-sm text-sm py-2 px-3 border" />
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-end pt-4">
                    <Button className="gap-2"><Save size={16}/> Save Changes</Button>
                 </div>
               </div>
             )}

             {/* PAYMENT TAB (ENTREPRENEUR) */}
             {activeTab === 'payment' && user.role === UserRole.ENTREPRENEUR && (
               <div className="space-y-6">
                  <div>
                   <h2 className="text-xl font-bold text-stone-900 mb-1">Payment Methods</h2>
                   <p className="text-sm text-stone-500">Manage how you pay for rentals.</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="bg-white p-1 border border-stone-200 rounded w-12 h-8 flex items-center justify-center font-bold text-xs">iDEAL</div>
                        <span className="text-sm font-medium text-stone-900">ING Bank (**89)</span>
                        <span className="bg-stone-200 text-stone-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Default</span>
                     </div>
                     <button className="text-sm text-primary-700 hover:underline">Edit</button>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2"><CreditCard size={16}/> Add Payment Method</Button>

                  <div className="border-t border-stone-200 pt-6">
                     <h2 className="text-xl font-bold text-stone-900 mb-4">Billing Address</h2>
                     <p className="text-sm text-stone-500 mb-4">Required for tax invoices.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Street + Number" className="border border-stone-300 rounded-md px-3 py-2 text-sm" />
                        <input type="text" placeholder="Postal Code" className="border border-stone-300 rounded-md px-3 py-2 text-sm" />
                        <input type="text" placeholder="City" className="border border-stone-300 rounded-md px-3 py-2 text-sm" />
                     </div>
                  </div>
               </div>
             )}

             {/* PAYOUT TAB (HOST) */}
             {activeTab === 'payment' && user.role === UserRole.OWNER && (
               <div className="space-y-6">
                  <div>
                   <h2 className="text-xl font-bold text-stone-900 mb-1">Payout Settings</h2>
                   <p className="text-sm text-stone-500">Manage how you receive earnings.</p>
                  </div>
                  
                  <div className="bg-sky-50 p-6 rounded-lg border border-sky-100">
                     <h3 className="font-bold text-sky-900 mb-4">Bank Details (IBAN)</h3>
                     <div className="grid grid-cols-1 gap-4">
                        <div>
                           <label className="block text-xs font-bold text-sky-700 uppercase mb-1">IBAN (NL)</label>
                           <input type="text" placeholder="NL99 INGB 0000 0000 00" className="w-full border border-sky-200 rounded-md px-3 py-2 text-sm focus:ring-sky-500 focus:border-sky-500" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-sky-700 uppercase mb-1">Account Holder Name</label>
                           <input type="text" className="w-full border border-sky-200 rounded-md px-3 py-2 text-sm focus:ring-sky-500 focus:border-sky-500" />
                        </div>
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-stone-700 mb-2">Payout Frequency</label>
                     <select className="w-full md:w-1/3 rounded-md border-stone-300 text-sm py-2 px-3 border">
                        <option>Weekly (Every Monday)</option>
                        <option>Monthly (1st of month)</option>
                     </select>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button className="bg-sky-600 hover:bg-sky-700 gap-2"><Save size={16}/> Save Payout Settings</Button>
                 </div>
               </div>
             )}

             {/* NOTIFICATIONS TAB */}
             {activeTab === 'notifications' && (
               <div className="space-y-6">
                  <h2 className="text-xl font-bold text-stone-900">Notification Preferences</h2>
                  <div className="space-y-4">
                     {[
                       'Booking Confirmations',
                       'New Messages',
                       'Marketing & Newsletters',
                       user.role === UserRole.ENTREPRENEUR ? 'Workshop Reminders' : 'New Booking Requests',
                       user.role === UserRole.OWNER ? 'Compliance Alerts' : 'New Kitchen Alerts'
                     ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                           <span className="text-stone-700 text-sm">{item}</span>
                           <div className="flex items-center gap-4">
                              <label className="flex items-center gap-2 text-xs text-stone-500 cursor-pointer">
                                 <input type="checkbox" defaultChecked className="rounded text-primary-600 focus:ring-primary-500" /> Email
                              </label>
                              <label className="flex items-center gap-2 text-xs text-stone-500 cursor-pointer">
                                 <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" /> SMS
                              </label>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
             )}

             {/* SECURITY TAB */}
             {activeTab === 'security' && (
                <div className="space-y-6">
                   <h2 className="text-xl font-bold text-stone-900">Privacy & Security</h2>
                   
                   <div className="flex items-center justify-between py-4 border-b border-stone-200">
                      <div>
                         <h3 className="text-sm font-bold text-stone-900">Two-Factor Authentication (2FA)</h3>
                         <p className="text-xs text-stone-500">Add an extra layer of security.</p>
                      </div>
                      <Button variant="outline" size="sm">Enable 2FA</Button>
                   </div>

                   <div className="flex items-center justify-between py-4 border-b border-stone-200">
                      <div>
                         <h3 className="text-sm font-bold text-stone-900">Password</h3>
                         <p className="text-xs text-stone-500">Last changed 3 months ago.</p>
                      </div>
                      <Button variant="outline" size="sm">Change Password</Button>
                   </div>

                   <div className="pt-4">
                      <h3 className="text-sm font-bold text-stone-900 mb-2">Data Management (GDPR)</h3>
                      <div className="flex gap-3">
                         <Button variant="outline" size="sm">Export My Data</Button>
                         <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete Account</Button>
                      </div>
                   </div>
                </div>
             )}

          </div>
        </div>
      </div>
    </div>
  );
};
