import Banner from "@/components/home/Banner/Banner";
import Categories from "@/components/home/Categories/Categories";
import Header from "@/components/home/Header/Header";

export default function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Categories/>
    </div>
  );
}
