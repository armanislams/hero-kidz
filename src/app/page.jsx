import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner/>
      </section>
      <section>
        <Products/>
      </section>
    </div>
  );
}
