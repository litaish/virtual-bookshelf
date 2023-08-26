import waves from '../../assets/waves.svg';
import { LoginForm } from './LoginForm';

export const LoginView = () => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-bottom flex justify-center items-center"
      style={{ backgroundImage: `url(${waves})` }}
    >
      <LoginForm />
    </div>
  );
};
