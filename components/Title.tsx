import cn from "classnames";
import Icon from "./Icon";
import { Button } from "antd";
import Link from "next/link";

const Title = ({ icon, text, link }) => (
    <h2 className={cn(
        "flex justify-between md:justify-start items-center gap-x-2",
        "caption-1 lg:heading-4 text-gray-950 mb-6"
    )}>
        {icon && <Icon size="2xl" name={icon} className="hidden md:inline-block" />}
        {text}
        <span className={cn(
            "hidden md:inline-block h-px flex-1 bg-gray-400 rounded-md",
            "mr-8 ml-2 mt-2"
        )} />
        {
            link && (
                <Link href={link.to}>
                    <Button type="link">{link.text}</Button>
                </Link>
            )
        }
    </h2>
);

export default Title;
