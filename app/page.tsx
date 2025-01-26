import About from "./components/Home/About";
import Categories from "./components/Home/Categories";
import Collections from "./components/Home/Collections";
import FollowUs from "./components/Home/FollowUs";
import Hero from "./components/Home/Hero";
import Images from "./components/Home/Images";
import NewArrivals from "./components/Home/NewArrivals";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Categories />
      <About />
      <Collections />
      <FollowUs />
      <Images />
    </>
  );
}
