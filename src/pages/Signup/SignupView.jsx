import waves from '../../assets/waves.svg';
import { SignupForm } from './SignupForm';

export const SignupView = () => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-bottom flex justify-center items-center"
      style={{ backgroundImage: `url(${waves})` }}
    >
      <SignupForm />
    </div>
  );
};
