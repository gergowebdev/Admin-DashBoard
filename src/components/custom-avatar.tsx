import { Avatar as AntdAvatar } from "antd";

type Props = AvatarProps & {
    name: string;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
    return (
        <AntdAvatar
            alt={"Gergő Gyenes"}
            size="small"
            style={{
                backgroundColor: "#87d068",
                display: "flex",
                alignItems: "center",
                border: "none",
            }}
        >
            {name}
        </AntdAvatar>
    );
};

export default CustomAvatar;
