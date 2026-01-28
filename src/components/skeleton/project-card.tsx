import { Card, Skeleton } from "antd";

const ProjectCardSkeleton = () => {
    return (
        <Card>
            <Skeleton.Input
                active
                size="small"
                style={{ width: 140, marginBottom: 12 }}
            />
            <Skeleton active paragraph={{ rows: 2 }} />
        </Card>
    );
};

export default ProjectCardSkeleton;
