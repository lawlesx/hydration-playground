import { ReactNode } from "react";

const Wrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col gap-20 items-center justify-center min-h-screen">
      <h2 className="text-mauve-mist text-shadow-lg text-shadow-dusty-rose text-9xl font-festive">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Wrapper;
