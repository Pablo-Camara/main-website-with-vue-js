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

    const goToMyAccountPage = () => {
        router.push('/my-account');
    }

    return { goTo, goHome, goToLoginPage, goToRegisterPage, goToMyAccountPage };
}