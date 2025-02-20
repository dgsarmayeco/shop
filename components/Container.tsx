import { createElement } from "react";
import cn from "classnames";

const Container = ({ tag, containerClassName, wrapperClassName, children }) => {
    return createElement(
        tag,
        {
            className: cn(" px-5 lg:px-6", containerClassName)
        },
        <div className={cn("container mx-auto", wrapperClassName)} >
            {children}
        </div>

    );
};

export default Container;