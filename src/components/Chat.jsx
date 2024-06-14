// import {
//     EditOutlined,
//     DownloadOutlined,
//     RedoOutlined,
//     DeleteOutlined,
// } from "@ant-design/icons"
// const Chat = () => {
//     return (
//         <>
//             <div className="flex justify-between items-center px-2">
//                 <div>Chat</div>
//                 <div className="flex gap-4">
//                     <EditOutlined />
//                     <EditOutlined />
//                     <DownloadOutlined />
//                     <RedoOutlined />
//                     <DeleteOutlined />
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Chat
// import {  useEffect, useRef, useState } from "react"
// import TextInput from "./InputChat"
// import { MessageLeft, MessageRight } from "./Message"
// import { Box, Button, Paper, Typography } from "@mui/material"

// export default function App() {
//     const [loading, setLoading] = useState(false)
//     const [question, setQuestion] = useState("")

//     const messagesEndRef = useRef<null | HTMLDivElement>(null)

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//     }
//     useEffect(() => {
//         scrollToBottom()
//     }, [])
//     useEffect(() => {}, [])

//     const oldMessages = (e) => {
//         const { scrollTop, scrollHeight, clientHeight } =
//             e.target

//     }
//     return (
//         <>
//             <Paper className="w-[400px] h-[80vh] flex flex-col items-center justify-around gap-3">
//                 <Box className="flex w-full justify-center items-center">
//                     <Typography className="mt-2">
//                         Chat with support staff
//                     </Typography>

//                 </Box>

//                 <Box
//                     className="w-[400px]  flex flex-col items-center relative gap-3 overflow-auto h-[70vh]"
//                     onScroll={oldMessages}
//                 >
//                     <MessageLeft message="Hello I am support staff, Can I help you?" />

//                     {dataChat?.map((item, index) => {
//                         if (item.senderId === userId) {
//                             return (
//                                 <MessageRight
//                                     key={index}
//                                     message={item.message}
//                                 />
//                             )
//                         } else {
//                             return (
//                                 <MessageLeft
//                                     key={index}
//                                     message={item.message}

//                                     checkAI={false}
//                                 />
//                             )
//                         }
//                     })}
//                     {loading ? (
//                         <MessageLeft loading={loading} checkAI={false} />
//                     ) : null}
//                     <div ref={messagesEndRef} />
//                 </Box>
//                 <TextInput
//                     question={question}
//                     setQuestion={setQuestion}
//                     setLoading={setLoading}
//                     dataChat={dataChat}
//                     setDataChat={setDataChat}
//                 />
//             </Paper>
//         </>
//         // </div>
//     )
// }
