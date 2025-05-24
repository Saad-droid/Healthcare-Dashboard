import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCard/HealthStatusCards';

function DashboardOverview() {
  return (
    <React.Fragment>
      <AnatomySection />
      <HealthStatusCards />
    </React.Fragment>
  );
}

export default DashboardOverview;