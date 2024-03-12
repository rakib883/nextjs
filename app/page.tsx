import Image from "next/image";
import Banner from "./Component/Banner-area/Banner";
import Sponser from "./Component/Sponser-area/Sponser";
import Try from "./Component/Try it/Try";
import When from "./Component/When to use/When";
import Resurce from "./Component/Resources/Resurce";
import Route from "./Component/Route/Route";
import UseWonData from "./Component/Unu data/UseWonData";

export default function Home() {
  return (
    <main>
       <Banner></Banner>
       <Sponser></Sponser>
       <Try></Try>
       <When></When>
       <Resurce></Resurce>
       <Route></Route>
       <UseWonData></UseWonData>
    </main>
  );
}
