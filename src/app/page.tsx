export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen flex flex-col items-center text-white">
      <div className="py-10">
        <h1 className="text-6xl font-raleway">Hydration Playground</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 w-3/4">
        {[
          {
            title: "Zone 1",
            description:
              "Fully client side hydrated. This component and all its children are rendered on the client.",
          },
          {
            title: "Zone 2",
            description:
              "Partial hydration (RSC). This is a server with a mix of server and client components.",
          },
          {
            title: "Zone 3",
            description:
              "Progressive hydration - On Visibilty or Interaction. This component is rendered on the server and sent to the client as HTML, but it only hydrates when it becomes visible or the user interacts with it.",
          },
          {
            title: "Zone 4",
            description:
              "Adaptive hydration - Based on Network/Device Capabilities. This component adapts its hydration strategy based on the user's network speed and device capabilities, providing an optimized experience.",
          },
        ].map((zone, index) => (
          <div className="border p-5 h-64" key={index}>
            <h2 className="text-3xl font-raleway mb-5 uppercase">
              {zone.title}
            </h2>
            <p className="font-nunito-sans tracking-wider">
              {zone.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
