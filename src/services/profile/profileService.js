import api from '../../utils/api';

export class ProfileService {
  static async updateProfile(userData) {
    try {
      const response = await api.put('/api/user/profile', {
        name: userData.name,
        newPassword: userData.newPassword || undefined,
        keywords: userData.keywords.map(keyword => ({ text: keyword })),
        keywordIntent: userData.keywordIntent
      });
      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  }
}