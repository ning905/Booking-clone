import "./list.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

export default function List() {
	const location = useLocation()
	const [destination, setDestination] = useState(location.state.destination)
	const [date, setDate] = useState(location.state.date)
	const [openDate, setOpenDate] = useState(false)

	const [options, setOptions] = useState(location.state.options)

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="list-container">
				<div className="list-wrapper">
					<ul className="list-search">
						<h1 className="ls-title">Search</h1>
						<li className="ls-item">
							<label>Destination</label>
							<input type="text" placeholder={destination} />
						</li>
						<li className="ls-item">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate((o) => !o)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									ranges={date}
									minDate={new Date()}
								/>
							)}
						</li>
						<li className="ls-item">
							<label>Options</label>
							<ul className="ls-option-list">
								<li className="ls-option-item">
									<span className="ls-option-text">
										Min price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</li>
								<li className="ls-option-item">
									<span className="ls-option-text">
										Max price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</li>
								<li className="ls-option-item">
									<span className="ls-option-text">Adult</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.adult}
										min={1}
									/>
								</li>
								<li className="ls-option-item">
									<span className="ls-option-text">Children</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.children}
										min={0}
									/>
								</li>
								<li className="ls-option-item">
									<span className="ls-option-text">Room</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.room}
										min={1}
									/>
								</li>
							</ul>
						</li>
						<button>Search</button>
					</ul>
					<ul className="list-result">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</ul>
				</div>
			</div>
		</div>
	)
}
