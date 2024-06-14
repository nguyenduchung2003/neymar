import "./App.css"
import MenuCustom from "./components/MenuCustom"
import Chat from "./components/Chat"
function App() {
    return (
        <div
            className="grid grid-rows-1 gap-2"
            style={{ gridTemplateColumns: "20% 37% 37%" }}
        >
            <div className=" border border-solid ">
                <MenuCustom />
            </div>
            <div className="border border-solid ">2</div>
            <div className="border border-solid ">
                <Chat />
            </div>
        </div>
    )
}

export default App
