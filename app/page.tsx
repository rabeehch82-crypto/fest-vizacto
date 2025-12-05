'use client';

import { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  LayoutGrid, 
  Shield, 
  Users, 
  CreditCard, 
  List, 
  Calendar, 
  Settings, 
  SlidersHorizontal,
  Layers,
  FileText,
  BarChart3,
  GraduationCap,
  Printer,
  Code,
  Trophy,
  X,
  User,
  Triangle
} from 'lucide-react';

export default function DashboardPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Data for the charts/lists
  const recentPrograms = [
    { name: 'Pencil Drawing (Girls)', date: '27/09/2024' },
    { name: 'Sunnah Showcase (Girls)', date: '27/09/2024' },
    { name: 'Talent Test (Girls)', date: '27/09/2024' },
    { name: 'Photography', date: '27/09/2024' },
    { name: 'AI Promt Creation', date: '27/09/2024' },
  ];

  const recentMembers = [
    { name: 'UZAIR', place: 'Kolar' },
    { name: 'Muhammed suhail', place: 'Anantapur' },
    { name: 'Rihan', place: 'Anantapur' },
    { name: 'AFREEN TAJ', place: 'Kolar' },
    { name: 'ASMA', place: 'Kolar' },
  ];

  // Sidebar Menu Configuration
  const menuItems = [
    { name: 'Dashboard', icon: LayoutGrid, active: true },
    { name: 'Access Control', icon: Shield },
    { name: 'Teams', icon: Users },
    { name: 'Members', icon: CreditCard },
    { name: 'Categories', icon: List },
    { name: 'Programs', icon: Calendar },
    { name: 'Program Control', icon: SlidersHorizontal },
    { name: 'Stages', icon: Layers },
    { name: 'Stage Control', icon: SlidersHorizontal }, // Reusing icon for visual similarity
    { name: 'Marks', icon: FileText },
    { name: 'Team Marks', icon: BarChart3 },
    { name: 'Grade Points', icon: GraduationCap },
    // Simplified list for visual demo, but you can add ID Card, Printouts etc here
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] font-sans text-slate-800 flex">
      
      {/* Mobile Header (Visible only on small screens) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
        <div className="font-bold text-xl">Thalaash</div>
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 hover:bg-slate-100 rounded-lg"
        >
          {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-slate-200 flex flex-col
        transform transition-transform duration-200 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="h-20 flex items-center justify-between px-6">
          <h1 className="text-xl font-bold tracking-tight">Thalaash</h1>
          <button className="text-slate-400 hover:text-slate-600">
            <Bell size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 custom-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={18} className={item.active ? 'text-violet-700' : 'text-slate-400'} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
            <Settings size={18} className="text-slate-400" />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:h-screen lg:overflow-y-auto pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Top Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="text-slate-500 text-sm">
              <span className="block sm:inline">Oct 10, 2024, 9:45:00 AM</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline mt-1 sm:mt-0">Program assignment deadline has passed.</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
                <Search size={18} />
              </button>
              <button className="h-10 w-10 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-200 hover:bg-violet-700 transition-colors">
                <User size={18} />
              </button>
            </div>
          </header>

          {/* Welcome Title */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Welcome, Administrator</h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-2">Total Programs</p>
                <p className="text-4xl font-bold text-slate-900">37</p>
              </div>
              <div className="text-slate-400">
                <Calendar size={24} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-2">Total Members</p>
                <p className="text-4xl font-bold text-slate-900">103</p>
              </div>
              <div className="text-slate-400">
                <Users size={24} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-2">Total Teams</p>
                <p className="text-4xl font-bold text-slate-900">3</p>
              </div>
              <div className="text-slate-400">
                <Triangle size={24} className="fill-current" />
              </div>
            </div>
          </div>

          {/* Lists Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            
            {/* Recent Programs */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900">Recent Programs</h3>
                <p className="text-xs text-slate-500 mt-1">Latest added programs</p>
              </div>

              <div className="space-y-4 mb-6">
                {recentPrograms.map((program, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 font-medium">{program.name}</span>
                    <span className="text-slate-400 text-xs">{program.date}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                View All Programs 
                <span className="text-lg leading-none">→</span>
              </button>
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900">Recent Members</h3>
                <p className="text-xs text-slate-500 mt-1">Latest added members</p>
              </div>

              <div className="space-y-4 mb-6">
                {recentMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 font-medium uppercase">{member.name}</span>
                    <span className="text-slate-400 text-xs">{member.place}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                View All Members
                <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="mb-4">
              <h3 className="font-semibold text-slate-900">Quick Actions</h3>
              <p className="text-xs text-slate-500 mt-1">Manage your festival components</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[
                'Dashboard', 'Members', 'Program Control', 'Marks', 
                'Stages', 'Stage Control', 'Team Marks', 'Results'
              ].map((action) => (
                <button 
                  key={action}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors text-left"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
