import { PlusOutlined, MinusOutlined, SearchOutlined } from "@ant-design/icons"
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined"
import HighlightAltOutlinedIcon from "@mui/icons-material/HighlightAltOutlined"
import ContrastOutlinedIcon from "@mui/icons-material/ContrastOutlined"
import ContentPDF from "./ContentPDF"
const LayoutPDF = () => {
    return (
        <div
            className="flex items-center flex-col w-full mx-2 overflow-y-auto"
            style={{ height: "calc(100vh - 26px)" }}
        >
            <div className="flex justify-center items-center gap-3 w-[96%] ">
                <ContrastOutlinedIcon />
                <p className="truncate ">
                    _huong dan phan mem HSG online cap quoc gia number one dep
                    trai
                </p>
                <MinusOutlined />

                <ReplayOutlinedIcon />
                <PlusOutlined />
                <div className="rounded-md flex items-center">
                    <span className=" bg-gray-300 rounded-md px-3 py-1  mr-2 text-gray-800">
                        1
                    </span>
                    <span className="mr-2">/</span>
                    <span className=" text-gray-800">6</span>
                </div>
                <HighlightAltOutlinedIcon />
                <SearchOutlined />
            </div>
            <ContentPDF />
        </div>
    )
}
export default LayoutPDF
