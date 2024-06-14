import { useEffect, useRef, useState } from "react"
import TextInput from "./InputChat"
import { MessageLeft, MessageRight } from "./Message"
import { Box } from "@mui/material"
import {
    EditOutlined,
    DownloadOutlined,
    RedoOutlined,
    DeleteOutlined,
    ExportOutlined,
} from "@ant-design/icons"
const dataChat = [
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 1,
        message: "Hello I am support staff, Can I help you?",
    },
    {
        senderId: 2,
        message: "Yes, I have a problem with my account",
    },
    {
        senderId: 1,
        message: "What is your problem?",
    },
    {
        senderId: 2,
        message: "I can't login to my account",
    },
    {
        senderId: 1,
        message: "Please provide your email address",
    },
    {
        senderId: 2,
        message: "My email address is",
    },
    {
        senderId: 2,
        message: "My email address is",
    },
]
export default function Chat() {
    const [question, setQuestion] = useState("")
    const messagesEndRef = useRef(null)

    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToBottom()
    }, [messagesEndRef])
    useEffect(() => {}, [])
    // nguoi nhan
    const userId = 1

    return (
        <>
            <Box
                className="  flex flex-col items-center  gap-3  justify-between "
                style={{ height: "calc(100vh - 26px)" }}
            >
                <Box className="flex w-full justify-center items-center">
                    <div className="mt-2 h-[30px] flex justify-between items-center px-2 w-[90%]">
                        <h2>Chat</h2>
                        <div className="flex gap-2 text-[20px] text-[#696a6b]">
                            <ExportOutlined />
                            <EditOutlined />
                            <DownloadOutlined />
                            <RedoOutlined />
                            <DeleteOutlined />
                        </div>
                    </div>
                </Box>

                <Box className="flex flex-col items-center relative gap-3 overflow-auto w-[100%]">
                    {dataChat?.map((item, index) => {
                        if (item.senderId === userId) {
                            return (
                                <MessageRight
                                    key={index}
                                    message={item.message}
                                />
                            )
                        } else {
                            return (
                                <MessageLeft
                                    key={index}
                                    message={item.message}
                                />
                            )
                        }
                    })}

                    <div ref={messagesEndRef} />
                </Box>
                <TextInput
                    question={question}
                    setQuestion={setQuestion}

                    // dataChat={dataChat}
                    // setDataChat={setDataChat}
                />
            </Box>
        </>
        // </div>
    )
}
