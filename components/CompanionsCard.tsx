import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface CompanionCardProps {
	id: string
	topic: string
	name: string
	subject: string
	duration: number
	color: string
}

const CompanionCard = ({
   id,
   name,
   topic,
   subject,
   duration,
   color,
 }: CompanionCardProps) => {
	return (
		<article className="companion-card" style={{backgroundColor: color}}>
			<div className="flex justify-between items-center">
				<div className="subject-badge">{subject}</div>
				<Image src="/icons/bookmark.svg" alt="Bookmark" width={12.5} height={15}/>
			</div>

			<h2 className="text-2xl font-bold">{name}</h2>
			<p className="text-sm">{topic}</p>

			<div className="flex items-center gap-2">
				<Image alt="Duration" src="/icons/clock.svg" width={13.5} height={13.5} />
				<p className="text-sm">{duration} mins duration</p>
			</div>

			<Link href={`/companions/${id}`} className="w-full">
				<Button className="w-full btn-primary justify-center">Launch Lesson</Button>
			</Link>
		</article>
	)
}
export default CompanionCard
