import React from 'react'
import CompanionsCard from "@/components/CompanionsCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";

const Page = () => {
	return (
		<main>
			<h1>Popular Companions</h1>

			<section className="home-section">
				<CompanionsCard
					id="1"
					topic="Topic Name 1"
					name="Topic Card 1"
					subject="Science"
					duration={45}
					color="#ffd4a6"
				/>
				<CompanionsCard
					id="2"
					topic="Topic Name 2"
					name="Topic Card 2"
					subject="Maths"
					duration={45}
					color="#d3a5b1"
				/>
				<CompanionsCard
					id="3"
					topic="Topic Name 3"
					name="Topic Card 3"
					subject="Social"
					duration={45}
					color="#c3b5a1"
				/>
			</section>

			<section className="home-section">
				<CompanionsList />
				<Cta />
			</section>

		</main>
	)
}

export default Page