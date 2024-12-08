import api from '../../utils/api';

// function to update the user profile
export class ProfileService {
  static async updateProfile(userData) {
    try {
      const response = await api.put('/user/profile', {
        name: userData.name,
        newPassword: userData.newPassword || undefined,
        keywords: userData.keywords
      });
      
      return response.data;
    } catch (error) {
      console.error('Profile update error:', error.response || error);
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  }
}