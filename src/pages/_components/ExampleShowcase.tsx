import clsx from "clsx"
import { createEffect, createSignal, For } from "solid-js"
import Collapse from "~/components/Collapse.jsx"
import { positiveMod } from "~/helpers/math.js"
import agenciesImage from "../_assets/example-agencies.png"
import blogsImage from "../_assets/example-blogs.png"
import eCommerceImage from "../_assets/example-e-commerce.webp"
import marketingImage from "../_assets/example-relevant-file.webp"
import portfolioImage from "../_assets/example-revenue-record.webp"
import freesearchImage from "../_assets/example-bank-cases.webp"
import revenuerecordsImage from "../_assets/example-case-detail.webp"

type Item = {
	title: string
	description: string
	liveUrl: URL
	image: ImageMetadata
	cta: {
		text: string
		href: string
	}
}

const items: Item[] = [
	{
		title: "Automatic Title Chain",
		description:
			"System automatically finds relevant Title Chain for each property.",
		liveUrl: new URL("https://uat.bhume.in/"),
		image: marketingImage,
		cta: {
			text: "",
			href: "",
		},
	},
	{
		title: "Bank wise Cases",
		description:
			"Access all priority cases on one screen. View lender-wise history of all cases with their status.",
		liveUrl: new URL("https://freesearchigrservice.maharashtra.gov.in/"),
		image: freesearchImage,
		cta: {
			text: "",
			href: "",
		},
	},
	{
		title: "IGR data",
		description: "Save valuable time by downloading registry data automatically in minutes as compared to hours.",
		liveUrl: new URL("https://bhulekh.mahabhumi.gov.in/"),
		image: revenuerecordsImage,
		cta: {
			text: "",
			href: "",
		},
	},
	// {
	// 	title: "Litigation Search",
	// 	description:
	// 		"Search our vast database covering 200mn cases from 10,000 courts across India.",
	// 	liveUrl: new URL("https://bhulekh.mahabhumi.gov.in/"),
	// 	image: agenciesImage,
	// 	cta: {
	// 		text: "",
	// 		href: "",
	// 	},
	// },
	{
		title: "Revenue Records",
		description:
			"Fetch up-to-date revenue records automatically from government website.",
		liveUrl: new URL("https://bhulekh.mahabhumi.gov.in/"),
		image: portfolioImage,
		cta: {
			text: "",
			href: "",
		},
	},
]

const titleHeight = 32

const [current, setCurrent] = createSignal<number | undefined>(0)

export default function ExampleShowcase() {
	return (
		<div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 md:flex-row md:items-center md:px-0">
			<section aria-label="Examples" class="mb-4 grid gap-4 md:mx-auto md:w-[380px]">
				<For each={items}>
					{(item, index) => {
						const [open, setOpen] = createSignal(current() == index())

						const details = (
							<details
								class="group panel p-4 text-left"
								open={index() === 0}
								onClick={(event) => {
									if (event.target.localName === "a") return
									event.preventDefault()
									setCurrent(index())
								}}
							>
								<summary class="accordion heading-4 flex w-full cursor-pointer select-none items-center justify-between">
									<span>{item.title}</span>
									<div
										aria-hidden="true"
										class="leading-none after:content-['+'] group-open:after:content-['-']"
									></div>
								</summary>

								<Collapse
									isOpen={open()}
									onTransitionEnd={() => {
										if (details.open && !open()) {
											details.open = false
										}
									}}
								>
									<p class="body my-4 text-gray-200">{item.description}</p>
									<p class="flex justify-between">
										<a href={item.cta.href} class="link-underline">
											{item.cta.text}
										</a>
										<a href={item.liveUrl.href} class="link-underline">
											Learn more
										</a>
									</p>
								</Collapse>
							</details>
						) as HTMLDetailsElement

						createEffect(() => {
							if (current() === index()) {
								setOpen(true)
								details.open = true
							} else {
								setOpen(false)
							}
						})

						return details
					}}
				</For>
			</section>

			<section
				aria-label="Example Previews"
				style={{ "padding-bottom": `calc(${titleHeight}px * ${items.length - 1})` }}
				class="relative md:w-1/2"
			>
				<For each={items}>
					{(item, index) => (
						<a
							tabIndex={-1} // there are already links to the examples on the collapses
							href={item.liveUrl.href}
							target="_blank"
							style={{
								"--position": positiveMod(index() - (current() ?? 0), items.length),
								"--translate": `calc(var(--position) * ${titleHeight}px)`,
								"z-index": `calc(${items.length} - var(--position))`,
								"border-width": "5px",
								"border-radius": "12px"
							}}
							class={clsx(
								"panel left-0 top-0 block w-full",
								"translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)]",
								index() === current() ? "relative" : "absolute",
							)}
							data-card
						>
							{/* <p class="code flex items-center justify-center py-1 text-sm" aria-hidden="true">
								{item.liveUrl.hostname}
							</p> */}
							<img
								src={item.image.src}
								width={item.image.width}
								height={item.image.height}
								alt={`Example image for ${item.title}`}
								class="w-full object-cover object-left-top"
								loading="lazy"
								decoding="async"
								style={{
									"border-radius": "9px"
								}}
							/>
						</a>
					)}
				</For>
			</section>
		</div>
	)
}
