import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from "react-date-range"
import { useState } from "react"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file
import { format } from "date-fns"

export default function Header({ type }) {
	const [openDate, setOpenDate] = useState(false)
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	])
	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})

	function handleOption(name, operation) {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			}
		})
	}

	let headerContainer = "header-container"
	if (type === "list") {
		headerContainer += " listMode"
	}

	return (
		<div className="header">
			<div className={headerContainer}>
				<ul className="header-list">
					<li className="header-list-item active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</li>
					<li className="header-list-item">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</li>
					<li className="header-list-item">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</li>
					<li className="header-list-item">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</li>
					<li className="header-list-item">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</li>
				</ul>
				{type !== "list" && (
					<>
						<h1 className="header-title">
							A lifetime of discounts? It's Genius.
						</h1>
						<p className="header-desc">
							Get rewarded for your travels - unlock instant savings of 10% or
							more with a free Booking.com account
						</p>
						<button className="header-button">Sign in / Register</button>
						<ul className="header-search">
							<li className="header-search-item">
								<FontAwesomeIcon icon={faBed} className="header-icon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="header-search-input"
								/>
							</li>

							<li className="header-search-item">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="header-icon"
								/>
								<span
									onClick={() => setOpenDate((o) => !o)}
									className="header-search-text"
								>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
									date[0].endDate,
									"MM/dd/yyyy"
								)}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
									/>
								)}
							</li>

							<li className="header-search-item">
								<FontAwesomeIcon icon={faPerson} className="header-icon" />
								<span
									className="header-search-text"
									onClick={() => setOpenOptions((o) => !o)}
								>
									{`${options.adult} adult · ${options.adult} children · ${options.room} room`}
								</span>
								{openOptions && (
									<ul className="options">
										<li className="option-item">
											<span className="option-text">Adult</span>
											<div className="option-counter">
												<button
													disabled={options.adult <= 1}
													className="option-counter-button"
													onClick={() => handleOption("adult", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.adult}
												</span>
												<button
													className="option-counter-button"
													onClick={() => handleOption("adult", "i")}
												>
													+
												</button>
											</div>
										</li>
										<li className="option-item">
											<span className="option-text">Children</span>
											<div className="option-counter">
												<button
													disabled={options.children <= 0}
													className="option-counter-button"
													onClick={() => handleOption("children", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.children}
												</span>
												<button
													className="option-counter-button"
													onClick={() => handleOption("children", "i")}
												>
													+
												</button>
											</div>
										</li>
										<li className="option-item">
											<span className="option-text">Room</span>
											<div className="option-counter">
												<button
													disabled={options.room <= 1}
													className="option-counter-button"
													onClick={() => handleOption("room", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.room}
												</span>
												<button
													className="option-counter-button"
													onClick={() => handleOption("room", "i")}
												>
													+
												</button>
											</div>
										</li>
									</ul>
								)}
							</li>

							<li className="header-search-item">
								<button className="header-button">Search</button>
							</li>
						</ul>
					</>
				)}
			</div>
		</div>
	)
}
