import {
  Users,
  GraduationCap,
  Shield,
  Crown,
  ClipboardCheck,
  CreditCard,
  Bell,
  MessageSquareWarning,
} from 'lucide-react';
import Header from '@/components/Header';
import DashboardTile from '@/components/DashboardTile';

const dashboardTiles = [
  {
    title: 'Student Portal',
    description: 'Access student resources and information',
    icon: GraduationCap,
    to: '/student/login',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Teacher Portal',
    description: 'Manage classes and student records',
    icon: Users,
    to: '/teacher/login',
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Admin Portal',
    description: 'Administrative management tools',
    icon: Shield,
    to: '/admin/login',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Principal Portal',
    description: 'School oversight and management',
    icon: Crown,
    to: '/principal/login',
    iconBgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Attendance Report',
    description: 'View and track attendance records',
    icon: ClipboardCheck,
    to: '/student/attendance',
    iconBgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    title: 'Fees',
    description: 'Fee payment and transaction history',
    icon: CreditCard,
    to: '/fees',
    iconBgColor: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    title: 'Notices',
    description: 'Important announcements and updates',
    icon: Bell,
    to: '/notices',
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Grievance',
    description: 'Submit and track complaints',
    icon: MessageSquareWarning,
    to: '/grievance',
    iconBgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
];

const Index = () => {
  return (
    <div className="page-container">
      <Header />
      
      <main className="content-wrapper">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Welcome to School ERP
          </h2>
          <p className="text-muted-foreground mt-2">
            Select a portal to access your dashboard
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardTiles.map((tile, index) => (
            <div key={tile.title} style={{ animationDelay: `${index * 50}ms` }}>
              <DashboardTile {...tile} />
            </div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Total Students</h3>
            <p className="text-3xl font-bold text-foreground mt-2">1,234</p>
            <p className="text-sm text-success mt-1">+12% from last year</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Total Teachers</h3>
            <p className="text-3xl font-bold text-foreground mt-2">89</p>
            <p className="text-sm text-success mt-1">+3 new this semester</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Average Attendance</h3>
            <p className="text-3xl font-bold text-foreground mt-2">94.2%</p>
            <p className="text-sm text-success mt-1">Above target</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 School ERP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
