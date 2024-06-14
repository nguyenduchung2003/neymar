import "./App.css"
import MenuCustom from "./components/MenuCustom"
import Chat from "./components/Chat"
import LayoutPDF from "./components/LayoutPDF"
function App() {
    return (
        <div
            className="grid grid-rows-1 gap-2 overflow-x-hidden justify-center  items-center bg-slate-400"
            style={{ gridTemplateColumns: "20% 39.5% 39.5%" }}
        >
            <div>
                <MenuCustom />
            </div>
            <div className="bg-white">
                <LayoutPDF />
            </div>
            <div className="bg-white">
                <Chat />
            </div>
        </div>
    )
}

export default App
