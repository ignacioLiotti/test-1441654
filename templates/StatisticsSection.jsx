import React from "react";
import StatsCard from "../components/StatsCard";

function StatisticsSection({ strings }) {
  return (
    <section className="container-width flex flex-col items-center justify-center">
      <StatsCard
        projects={strings.projects}
        numProjects={150}
        satisfaction={strings.satisfaction}
        numSatisfaction={97}
        years={strings.years}
        numYears={5}
      />
    </section>
  );
}

export default StatisticsSection;
