import { List, Skeleton } from "antd";

const LatestActivitiesSkeleton = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: 5 })}
            renderItem={(_, index) => (
                <List.Item key={index}>
                    <Skeleton
                        avatar
                        active
                        title={false}
                        paragraph={{ rows: 1 }}
                    />
                </List.Item>
            )}
        />
    );
};

export default LatestActivitiesSkeleton;
