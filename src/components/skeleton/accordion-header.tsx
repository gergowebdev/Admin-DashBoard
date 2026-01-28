import { Skeleton, Space } from "antd";

const AccordionHeaderSkeleton = () => {
    return (
        <Space style={{ width: "100%" }} align="center">
            <Skeleton.Avatar active size="small" />
            <Skeleton.Input active size="small" style={{ width: 160 }} />
        </Space>
    );
};

export default AccordionHeaderSkeleton;
