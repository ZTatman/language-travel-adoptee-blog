import { Children, Fragment } from "react";

const Breadcrumb = ({
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) => {

    const childrenArray = Children.toArray(children);
    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <span>&gt;</span>
                </Fragment>
            );
        }
        return child;
    });
    return (
        <nav className={className}>
            <ol className="flex items-center space-x-2 text-sm">{childrenWtihSeperator}</ol>
        </nav>
    );
};

export default Breadcrumb;
