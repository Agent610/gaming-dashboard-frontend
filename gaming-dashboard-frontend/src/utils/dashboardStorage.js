const KEY = "gaming_dashboard_data";

export const saveDashboardData = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const loadDashboardData = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
};

export const clearDashboardData = () => {
  localStorage.removeItem(KEY);
};
