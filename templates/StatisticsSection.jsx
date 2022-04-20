import React from "react";
import StatsCard from "../components/StatsCard";
import moment from "moment";

function StatisticsSection({ strings }) {
  const numYears = moment("20160101", "YYYYMMDD").fromNow(true).split(" ")[0];

  return (
    <section className="container-width flex flex-col items-center justify-center mb-20">
      <StatsCard
        projects={strings.projects}
        numProjects={150}
        satisfaction={strings.satisfaction}
        numSatisfaction={97}
        years={strings.years}
        numYears={numYears}
      />
    </section>
  );
}

export default StatisticsSection;
