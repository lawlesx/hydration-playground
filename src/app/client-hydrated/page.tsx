import Carousel from "@/components/Carousel";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import Wrapper from "@/components/Wrapper";
import axios from "axios";

const ClientHydrated = async () => {
  const images = await axios
    .get<{ download_url: string }[]>("https://picsum.photos/v2/list?limit=5")
    .then((res) => res.data.map((img) => img.download_url));

  return (
    <main className="bg-black min-h-screen flex flex-col gap-40">
      <h1 className="text-9xl p-5 text-dusty-rose text-shadow-mauve-mist text-shadow-lg font-storyscript mx-auto">
        Client Side Hydrated UI
      </h1>
      <Wrapper title="Search Bar">
        <SearchBar />
      </Wrapper>
      <Wrapper title="Slider">
        <Slider />
      </Wrapper>
      <Wrapper title="Carousel">
        <Carousel images={images} />
      </Wrapper>
      <Wrapper title="Modal">
        <Modal />
      </Wrapper>
    </main>
  );
};

export default ClientHydrated;
