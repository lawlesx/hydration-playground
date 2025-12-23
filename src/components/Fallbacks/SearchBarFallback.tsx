const SearchBarFallback = () => {
  return (
    <div className="lg:w-1/2 w-full p-4 h-[50vh]">
      <input
        type="text"
        placeholder="Search..."
        className="bg-dusty-rose p-4 rounded-2xl placeholder:text-mauve-mist text-shadow-ivory-cream text-shadow-md placeholder:text-shadow-ivory-cream w-full text-2xl text-mauve-mist outline-none border-4 border-mauve-mist shadow-sm shadow-ivory-cream font-storyscript tracking-wider"
      />
    </div>
  );
};

export default SearchBarFallback;
