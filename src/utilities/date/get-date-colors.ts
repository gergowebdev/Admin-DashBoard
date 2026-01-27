import dayjs from "dayjs";

type DateColors = "success" | "processing" | "error" | "default" | "warning";

export const getDateColor = (args: {
    date: string;
    defaultColor?: DateColors;
}): DateColors => {
    const date = dayjs(args.date);
    const today = dayjs();

    if (date.isBefore(today)) {
        return "error";
    }

    if (date.isBefore(today.add(3, "day"))) {
        return "warning";
    }

    return args.defaultColor ?? "default";
};

export const getDate = (date?: string): string => {
    if (!date) {
        return "-";
    }

    const parsedDate = dayjs(date);

    if (!parsedDate.isValid()) {
        return "-";
    }

    return parsedDate.format("YYYY. MM. DD");
};
