export const AuthButton = ({ text }) => {
  return (
    <button
      className="bg-emerald-500 uppercase rounded-full text-slate-50 font-bold w-full text-2xl py-4 mt-8 drop-shadow-md transition-colors hover:bg-emerald-600"
      type="submit">
      {text}
    </button>
  );
};
