import { Default } from "./layouts/Default";

export const components = {
  Default,
  h2: (props: any) => {
    const idText = props?.children?.replace(/ /g, "-").toLowerCase();
    return (
      <div className="heading_wrapper" key={idText}>
        <h2 className="heading text-2xl lowercase" id={idText} {...props}>
          {props.children}
        </h2>
      </div>
    );
  },
};
