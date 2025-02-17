import { createElement } from "react";
import cn from "classnames";

const Container = ({ tag, containerClassName, wrapperClassName, children }) => {
    return createElement(
        tag,
        {
            className: cn("py-3 lg:py-7 px-5 lg:px-6", containerClassName)
        },
        <div className={cn("container mx-auto", wrapperClassName)} >
            {children}
        </div>

    );
};

export default Container;