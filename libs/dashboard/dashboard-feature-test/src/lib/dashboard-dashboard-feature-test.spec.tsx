import { render } from '@testing-library/react';

import DashboardDashboardFeatureTest from './dashboard-dashboard-feature-test';

describe('DashboardDashboardFeatureTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardDashboardFeatureTest />);
    expect(baseElement).toBeTruthy();
  });
});
