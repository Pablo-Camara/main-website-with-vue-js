import { useRouter } from 'vue-router';

export function useNavigation() {
    const router = useRouter();

    const goTo = (path) => {
        router.push(path);
    };

    const goHome = () => {
        router.push('/');
    };

    const goToLoginPage = () => {
        router.push('/login');
    }

    const goToRegisterPage = () => {
        router.push('/register');
    }

    return { goHome, goToLoginPage, goToRegisterPage, goTo };
}