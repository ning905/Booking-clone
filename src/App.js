import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel"
import HotelList from "./pages/hotelList/HotelList"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hotels" element={<HotelList />} />
			<Route path="/hotels/:id" element={<Hotel />} />
		</Routes>
	)
}

export default App
