// import { Button, TextField } from "@mui/material"
// import SendIcon from "@mui/icons-material/Send"
// import { FormEvent, useState } from "react"
// import { askAI } from "@/app/_api/allRolls"
// import { useCookies } from "next-client-cookies"
// import socket from "@/utils/socket"
// import { getUserId } from "@/app/_lib/action"

// const InputChat = ({ question, setQuestion }) => {
//     const handlerSubmit = async (e) => {
//         e.preventDefault()
//         if (question == "") {
//             return alert("Please type message")
//         }
//         if (question.trim() !== "") {
//             setQuestion("")
//         }
//     }
//     return (
//         <>
//             <form
//                 className="flex justify-center w-[95%] gap-2 items-center m-2"
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={handlerSubmit}
//             >
//                 <TextField
//                     label="Question...."
//                     className="w-full "
//                     value={question}
//                     InputProps={{
//                         style: {
//                             height: "45px",
//                             textAlign: "center",
//                         },
//                     }}
//                     onChange={(e) => setQuestion(e.target.value)}
//                 />
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     className="h-[45px]"
//                 >
//                     <SendIcon />
//                 </Button>
//             </form>
//         </>
//     )
// }

// export default InputChat
