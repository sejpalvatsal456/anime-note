const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Manrope", fontWeight: "600" }}
      className="md:w-75 bg-white/10 hover:bg-white/20 transition-color duration-300 cursor-pointer h-10 rounded-full flex flex-row items-center justify-center gap-3"
    >
      { children }
    </button>
  );
};

export default SecondaryButton;
