import { List, Skeleton } from "antd";

const UpcomingEventsSkeleton = () => {
    return (
        <List
            dataSource={Array.from({ length: 4 })}
            renderItem={(_, index) => (
                <List.Item key={index}>
                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                </List.Item>
            )}
        />
    );
};

export default UpcomingEventsSkeleton;
