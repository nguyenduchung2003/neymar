import { Upload, Button } from "antd"
import {
    PlusOutlined,
    FolderAddFilled,
    MessageOutlined,
} from "@ant-design/icons"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import { useState } from "react"
const MenuCustom = () => {
    // eslint-disable-next-line no-unused-vars
    const [imageUrl, setImageUrl] = useState("")

    const uploadButton = (
        <button
            style={{ border: 0, background: "none" }}
            className=" text-[#a9afb4] "
            type="button"
        >
            <div className="flex gap-1">
                <PlusOutlined /> <div>New Chat</div>
            </div>
            <div style={{ marginTop: 8 }}>
                <div>Drop PDF here</div>
            </div>
        </button>
    )
    return (
        <>
            <div
                className="flex flex-col  items-center  bg-[#04162c] text-[#a9afb4] gap-3 relative"
                style={{ height: "calc(100vh - 26px)" }}
            >
                <Upload
                    // name="avatar"
                    listType="picture-card"
                    className="mt-2"
                    // showUploadList={false}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{ width: "100%" }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
                <div className="flex gap-3 w-[90%]">
                    <Button className="bg-[#04162c]  text-[#a9afb4] border-[#2a4c79] h-[60px] flex gap-3 w-[60%]">
                        <AutoAwesomeIcon />
                        <div>
                            Upgrade to
                            <br />
                            Plus
                        </div>
                    </Button>
                    <Button className="bg-[#04162c]  text-[#a9afb4] border-[#2a4c79] h-[60px] flex gap-3 w-[40%]">
                        <FolderAddFilled />
                        <div>
                            New
                            <br />
                            Folder
                        </div>
                    </Button>
                </div>
                <Button type="primary" className="h-[50px] w-[90%]">
                    <div className="w-[80%] flex gap-1">
                        <MessageOutlined />
                        <span className=" truncate block ">
                            Hướng dẫn phần mềm HSG online 111111111
                        </span>
                    </div>
                </Button>
                <div className="absolute bottom-0">
                    <Button className="text-[#a9afb4] bg-[#04162c]  border-[#2a4c79] h-[40px] w-[100%]">
                        <p className="text-[#2652a7]"> Sign in</p> to save your
                        chat history
                    </Button>
                    <div className="flex gap-3">
                        <p>Home</p>
                        <p>Account</p>
                        <p>API</p>
                        <p>FAQ</p>
                        <p>Feedback</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuCustom
