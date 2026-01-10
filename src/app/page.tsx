import Banner from "@/components/home/Banner/Banner";
import Categories from "@/components/home/Categories/Categories";
import Header from "@/components/home/Header/Header";
import Order from "@/components/home/Order/Order";

export default function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Categories/>
      <Order/>
    </div>
  );
}
