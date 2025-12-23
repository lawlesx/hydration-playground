const SliderFallback = () => {
  const position = 250;

  return (
    <div id="slider" className="relative h-10 w-[400px] rounded-md">
      {/* --------------------------------- Cursor --------------------------------- */}
      <div
        className="absolute bottom-1 h-8 w-1.5 cursor-col-resize rounded-full bg-ivory-cream transition-[height] duration-700"
        style={{
          left: position,
        }}
      />
      <div
        className="absolute bottom-0 h-10 rounded-lg bg-mauve-mist transition-[height] duration-700"
        style={{
          width: position ? position - 5 : 0,
        }}
      >
        <div className="absolute bottom-0 left-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700">
          <h1 className="font-festive font-bold text-dusty-rose text-xl">
            Coffee
          </h1>
          <h2 className="font-storyscript font-bold text-ivory-cream text-shadow-xs text-shadow-dusty-rose text-lg">
            {((position / 400) * 100).toFixed(0)}%
          </h2>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 h-10 rounded-lg bg-dusty-rose transition-[height] duration-700"
        style={{
          width: position ? 388 - position : 0,
        }}
      >
        <div className="absolute bottom-0 right-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700">
          <h2 className="font-storyscript font-bold text-ivory-cream text-shadow-lg text-shadow-mauve-mist text-lg">
            {(((400 - position) / 400) * 100).toFixed(0)}%
          </h2>
          <h1 className="font-festive font-bold text-mauve-mist text-xl">
            Milk
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SliderFallback;
