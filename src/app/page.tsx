import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen flex flex-col items-center py-10 gap-20">
      <div className="py-10">
        <h1 className="text-9xl text-dusty-rose text-shadow-mauve-mist text-shadow-lg font-storyscript">
          Hydration Playground
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 w-3/4 pb-20">
        {[
          {
            title: "Client Hydrated UI",
            description:
              "Fully client side hydrated. This component and all its children are rendered on the client.",
            link: "/client-hydrated",
          },
          {
            title: (
              <>
                Next.js Streaming with{" "}
                <span className="w-min pb-1 bg-mauve-mist text-ivory-cream px-2">
                  Suspense
                </span>
              </>
            ),
            description:
              "Partial hydration (RSC). This is a server with a mix of server and client components.",
            link: "/streaming",
          },
        ].map((zone, index) => (
          <Link
            className="border-4 border-dusty-rose bg-mauve-mist/10 p-8 rounded-2xl hover:bg-mauve-mist/20 transition-all duration-300 shadow-md shadow-dusty-rose/30 hover:shadow-lg hover:shadow-golden-amber/40"
            key={index}
            href={zone.link}
          >
            <h2 className="text-4xl font-storyscript mb-6 text-dusty-rose text-shadow-md text-shadow-mauve-mist">
              {zone.title}
            </h2>
            <p className="font-nunito-sans tracking-wider text-ivory-cream leading-relaxed">
              {zone.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
