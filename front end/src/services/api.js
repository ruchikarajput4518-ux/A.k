// API Client for RIVEN Luxury Fashion House Backend

const API_BASE = '/api';

/**
 * Helper to make API requests with graceful degradation.
 * If backend is offline or unreachable, returns fallback data or throws graceful error.
 */
async function request(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error?.message || `HTTP ${res.status}`);
    }
    return data;
  } catch (err) {
    console.warn(`[RIVEN API Warning] ${endpoint}:`, err.message);
    throw err;
  }
}

export const api = {
  // System Health
  getHealth: async () => {
    return request('/health');
  },

  // Products
  getProducts: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.category && filters.category !== 'all') params.append('category', filters.category);
    if (filters.department) params.append('department', filters.department);
    if (filters.search) params.append('search', filters.search);
    if (filters.sort) params.append('sort', filters.sort);
    if (filters.featured) params.append('featured', 'true');

    const query = params.toString() ? `?${params.toString()}` : '';
    return request(`/products${query}`);
  },

  getProductById: async (id) => {
    return request(`/products/${id}`);
  },

  // Bespoke Orders
  createOrder: async (orderData) => {
    return request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },

  getOrderById: async (id) => {
    return request(`/orders/${id}`);
  },

  // Atelier Appointments
  createAppointment: async (appointmentData) => {
    return request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  },

  // Newsletter & Inquiries
  subscribeNewsletter: async (email) => {
    return request('/inquiries/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  submitContactInquiry: async (inquiryData) => {
    return request('/inquiries/contact', {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  },
};

export default api;
