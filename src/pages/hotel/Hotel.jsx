import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Mail from "../../components/mail/Mail"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"

export default function Hotel() {
	const [slideIndex, setSlideIndex] = useState(0)
	const [open, setOpen] = useState(false)

	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	]

	function handleOpen(i) {
		setSlideIndex(i)
		setOpen(true)
	}

	function handleMove(direction) {
		let newIndex

		if (direction === "l") {
			newIndex = slideIndex === 0 ? 5 : slideIndex - 1
		} else {
			newIndex = slideIndex === 5 ? 0 : slideIndex + 1
		}
		setSlideIndex(newIndex)
	}

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotel-container">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="slider-wrapper">
							<img
								src={photos[slideIndex].src}
								alt="hotel"
								className="slider-img"
							/>
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}

				<div className="hotel-wrapper">
					<button className="book-now">Reserve or Book Now!</button>
					<h1 className="hotel-title">Grand Hotel</h1>

					<div className="hotel-address">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 124 New York</span>
					</div>

					<span className="hotel-distance">
						Excellent location ??? 500m from center
					</span>

					<span className="hotel-price-highlight">
						Book a stay over $114 at this property and get a free airport taxi
					</span>

					<div className="hotel-images">
						{photos.map((photo, i) => (
							<div className="hotel-image-wrapper">
								<img
									onClick={() => handleOpen(i)}
									src={photo.src}
									alt="hotel"
									className="hotel-img"
								/>
							</div>
						))}
					</div>

					<div className="hotel-Details">
						<div className="hotel-details-texts">
							<h1 className="hotel-title">Stay in the heart of City</h1>
							<p className="hotel-desc">
								Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
								Street Apartments has accommodations with air conditioning and
								free WiFi. The units come with hardwood floors and feature a
								fully equipped kitchenette with a microwave, a flat-screen TV,
								and a private bathroom with shower and a hairdryer. A fridge is
								also offered, as well as an electric tea pot and a coffee
								machine. Popular points of interest near the apartment include
								Cloth Hall, Main Market Square and Town Hall Tower. The nearest
								airport is John Paul II International Krak??w???Balice, 16.1 km
								from Tower Street Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div>

						<div className="hotel-details-price">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<Mail />
				<Footer />
			</div>
		</div>
	)
}
