import React from 'react';
import { User, UserRole } from '../types';
import { EntrepreneurDashboard } from '../components/EntrepreneurDashboard';
import { OwnerDashboard } from '../components/OwnerDashboard';
import { Navigate } from 'react-router-dom';

interface DashboardProps {
  user: User | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === UserRole.ENTREPRENEUR) {
    return <EntrepreneurDashboard user={user} />;
  }

  if (user.role === UserRole.OWNER) {
    return <OwnerDashboard user={user} />;
  }

  return <div>Unknown role</div>;
};
