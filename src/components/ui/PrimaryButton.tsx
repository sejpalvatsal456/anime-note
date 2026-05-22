const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Manrope", fontWeight: "600" }}
      className="md:w-75 bg-[#8f44f0]  transition-color duration-300 cursor-pointer h-10 rounded-full flex flex-row items-center justify-center gap-3"
    >
      { children }
    </button>
  );
};

export default PrimaryButton;