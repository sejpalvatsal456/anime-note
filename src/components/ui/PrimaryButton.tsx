const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Manrope", fontWeight: "600" }}
      className="md:w-75
        relative
        group
        isolate
        [transform:translateZ(0)]
        overflow-hidden
        cursor-pointer
        h-10
        rounded-full
        flex
        items-center
        justify-center
        px-5
        text-white"
    >
      <span className=" absolute w-[100%] aspect-square md:w-75 md:h-75 bg-[conic-gradient(#8f44f0,#b048ff,#8f44f0)] animate-none group-hover:animate-[spin_2s_linear_infinite] " />
      <span className="relative flex items-center gap-3">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
