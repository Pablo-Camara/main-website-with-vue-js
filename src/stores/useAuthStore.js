import { defineStore } from 'pinia';
import { useNavigation } from '@/utils/useNavigation';
import { apiConfig } from '@/config/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false, // Assume false initially
    user: {
        first_name: null,
        last_name: null,
        email: null,
        newsletter_consent: null,
        email_confirmed: null
    },
  }),
  actions: {
    checkAuth() {
        fetch(apiConfig.BASE_URL + '/api/check-auth.php')
        .then(response => {
            if (!response.ok) {
                this.isAuthenticated = false;
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data.success == false) {
                this.isAuthenticated = false;
                return;
            }
            this.isAuthenticated = true;
            this.$patch({ user: data.user });
        })
        .catch(error => {
            this.isAuthenticated = false;
        });
    }
  },
});