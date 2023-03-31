import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section class=" p-12 mb-32 text-background text-center bg-dark">
    <div class="grid gap-x-0 lg:gap-x-2 md:grid-cols-4 ">
      <div class="mb-12 md:mb-0 lg:hover:bg-red-700  object-center py-4 hover:text-white">
        <h2 class="text-3xl font-bold display-5 text-primary mb-4">10+</h2>
        <h5 class="text-lg font-medium mb-4">Years of experience</h5>
      </div>

      <div class="mb-12 md:mb-0 lg:hover:bg-red-700 object-center hover:text-white">
        <h2 class="text-3xl font-bold display-5 text-primary mb-4">35+</h2>
        <h5 class="text-lg font-medium mb-4">Satisfied Clients</h5>
      </div>

      <div class="mb-12 md:mb-0 lg:hover:bg-red-700 object-center hover:text-white">
        <h2 class="text-3xl font-bold display-5 text-primary mb-4">10+</h2>
        <h5 class="text-lg font-medium mb-4">Complete Projects</h5>
      </div>

      <div class="mb-12 md:mb-0 lg:hover:bg-red-700 object-center hover:text-white">
        <h2 class="text-3xl font-bold display-5 text-primary mb-4">5+</h2>
        <h5 class="text-lg font-medium mb-4">Live products</h5>
      </div>
    </div>
  </section>
);

export default Stats;
