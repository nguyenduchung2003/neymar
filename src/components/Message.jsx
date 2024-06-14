import { Box, Skeleton, Typography } from "@mui/material"
import { CarryOutOutlined } from "@ant-design/icons"
export const MessageLeft = (props) => {
    // eslint-disable-next-line react/prop-types
    const { message = "no message", loading } = props

    return (
        <Box className="flex w-full">
            <Box className="ml-5">
                <Box className="bg-[#faf9fe] p-1 rounded-lg inline-block float-right mr-2 border-2 border-solid border-[#efeef2]">
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={30}
                        />
                    ) : (
                        <div>
                            <CarryOutOutlined className="float-right w-3" />
                            <Typography className="text-sm leading-normal p-1 px-2">
                                {message}
                            </Typography>
                        </div>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export const MessageRight = (props) => {
    // eslint-disable-next-line react/prop-types
    const { message = "no message" } = props

    return (
        <Box className="flex w-full justify-end ">
            <Box className="ml-5 ">
                <Box className="bg-[#3577ff] p-1 rounded-lg inline-block text-white ">
                    <Typography className="text-sm leading-normal p-1 px-2">
                        {message}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
