import { Card, Skeleton, Space } from "antd";

const KanbanColumnSkeleton = () => {
    return (
        <Card>
            <Skeleton.Input
                active
                size="small"
                style={{ width: 120, marginBottom: 16 }}
            />

            <Space direction="vertical" style={{ width: "100%" }}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} size="small">
                        <Skeleton active paragraph={{ rows: 2 }} />
                    </Card>
                ))}
            </Space>
        </Card>
    );
};

export default KanbanColumnSkeleton;
