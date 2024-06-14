// import { TextField, Button } from "@mui/material"

import { Button, Input, Space } from "antd"
import { SendOutlined } from "@ant-design/icons"
// eslint-disable-next-line react/prop-types
const InputChat = ({ question, setQuestion }) => {
    // Add 'question' to props validation

    const handlerSubmit = async (e) => {
        e.preventDefault()
        if (question == "") {
            return alert("Please type message")
        }
        // eslint-disable-next-line react/prop-types
        if (question.trim() !== "") {
            setQuestion("")
        }
    }
    return (
        <>
            <form
                className="flex justify-center w-[100%]  items-center m-2"
                noValidate
                autoComplete="off"
                onSubmit={handlerSubmit}
            >
                <Space.Compact
                    style={{
                        width: "95%",
                    }}
                >
                    <Input
                        placeholder="Ask any question...."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <Button type="primary">
                        <SendOutlined />
                    </Button>
                </Space.Compact>
            </form>
        </>
    )
}

export default InputChat
