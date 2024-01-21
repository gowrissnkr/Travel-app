import Maps from "../Component/Map"
import Modal from "../Component/Modal"
import PickUp from "../Component/PickUp"

const Home = () => {
    return (
        <div className="flex w-full">
            <Maps />
            <PickUp />
            {/* <Modal /> */}

        </div>
    )
}

export default Home