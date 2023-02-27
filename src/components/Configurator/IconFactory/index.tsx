import { FunctionComponent } from "react";
import { IconFactoryType } from "../../../types/configurator";
import { IIconMapping } from "../../../interfaces/configurator";

const IconFactory: FunctionComponent<IconFactoryType> = ({
  components,
  settings,
  type,
}: IconFactoryType) => {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const IconComponent = components.find(
    (component: IIconMapping) => type === component.type
  )!.component;

  return <IconComponent settings={settings} />;
};
export default IconFactory;
