import Carousel from "@/components/Carousel";
import SearchBarFallback from "@/components/Fallbacks/SearchBarFallback";
import SliderFallback from "@/components/Fallbacks/SliderFallback";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { Suspense } from "react";

const ClientHydrated = async () => {
  const images = await axios
    .get<{ download_url: string }[]>("https://picsum.photos/v2/list?limit=5")
    .then((res) => res.data.map((img) => img.download_url));

  return (
    <main className="bg-black min-h-screen flex flex-col gap-40">
      <h1 className="text-9xl p-5 text-dusty-rose text-shadow-mauve-mist text-shadow-lg font-storyscript mx-auto">
        Partial Pre Rendered UI
      </h1>
      <Wrapper title="Search Bar">
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </Wrapper>
      <Wrapper title="Slider">
        <Suspense fallback={<SliderFallback />}>
          <Slider />
        </Suspense>
      </Wrapper>
      <Wrapper title="Carousel">
        <Suspense fallback={<div>Loading Carousel...</div>}>
          <Carousel images={images} />
        </Suspense>
      </Wrapper>
      <Wrapper title="Modal">
        <Suspense fallback={<div>Loading Modal...</div>}>
          <Modal />
        </Suspense>
      </Wrapper>
    </main>
  );
};

export default ClientHydrated;
