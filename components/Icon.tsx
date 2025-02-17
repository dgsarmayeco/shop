import cn from "classnames";
import InlineSVG from "react-inlinesvg";

const sizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
    "2xl" : "w-10 h-10"
}

const Icon = ({ name, size, className }) => {
    return (
        <InlineSVG src={name.startsWith("/")? name : `/icons/${name}.svg`}
                   className={cn(
                       sizes[size],
                       className
                   )} />
    );
}


export default Icon;