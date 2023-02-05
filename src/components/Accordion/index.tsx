import { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { AccordionType } from "../../types/configurator";

const Accordion: FunctionComponent<AccordionType> = ({
  title,
  children,
}: AccordionType) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <div className="wizard-item__title" onClick={() => setActive(!active)}>
        {title}
      </div>
      <div
        className={classNames("form-color__wrapper", {
          active: active,
        })}
      >
        {children}
      </div>
    </>
  );
};
export default Accordion;
