// components/FavoriteIcon.tsx
import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

interface FavoriteIconProps {
    isFavorited: boolean;
    onClick: () => void;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ isFavorited, onClick }) => {
    return (
        <div
            className="absolute top-2 right-2 text-xl cursor-pointer transition-all duration-300 transform hover:scale-125 hover:text-red-500"
            onClick={onClick}
        >
            {isFavorited ? (
                <HeartFilled style={{ color: "red" }} />
            ) : (
                <HeartOutlined style={{ color: "white" }} />
            )}
        </div>
    );
};

export default FavoriteIcon;
