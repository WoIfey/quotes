'use client'
import Delete from '@/components/deletemodal'
import Update from '@/components/updatemodal'
import Copy from '@/components/copy'
import Likes from '@/components/likes'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function quotes({ data }: { data: any[] }) {
	/* const router = useRouter()
	const [quotes, setQuotes] = useState(data)
	function handleSort() {
		const sortedData = quotes.sort((a: any, b: any) => a.id - b.id)
		setQuotes(sortedData)
		router.refresh()
	} */
	return (
		<>
			{/* <button onClick={handleSort}>Sort</button> */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
				{data.map(q => (
					<div
						key={q.id}
						className="relative flex flex-col bg-slate-800 rounded-xl p-4"
					>
						<div className="flex flex-col justify-between gap-1.5">
							<div className="text-lg italic break-all">"{q.quote}"</div>
							<div className="text-base font-thin text-end break-all">
								— {q.author}
							</div>
						</div>
						<div className="group flex min-[300px]:flex-row flex-col sm:items-end mt-3 h-full gap-1.5 justify-between">
							<Likes id={q.id} likes={q.likes} />
							<div className="flex items-end gap-1.5">
								<Copy quote={q.quote} id={q.id} />
								<Delete id={q.id} />
								<Update quote={q.quote} author={q.author} id={q.id} />
							</div>
							<span className="absolute inset-0" />
						</div>
						<div className="flex gap-1 mt-2">
							<div className="text-xs font-extralight bg-slate-900 rounded px-1">
								{new Date(q.createdAt).toLocaleString()}
							</div>
							{new Date(q.createdAt).toLocaleString() !==
								new Date(q.updatedAt).toLocaleString() && (
								<div className="relative group flex text-[10px] font-medium z-20">
									<h1 className="bg-slate-900 text-slate-200 rounded px-1 relative cursor-default">
										Edited
									</h1>
									<span
										className="pointer-events-none group-hover:opacity-100 transition-opacity bg-gray-700 px-2 py-1 text-xs rounded-md absolute  
  -translate-x-1/2 -translate-y-14 opacity-0 m-4 mx-auto top-1/2 left-1/2 min-w-max transform"
									>
										{new Date(q.updatedAt).toLocaleString()}
									</span>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	)
}