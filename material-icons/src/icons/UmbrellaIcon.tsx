import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UmbrellaIcon: FC<IconInterface> = function UmbrellaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UmbrellaIcon ${className}`;
      return (
        <Icon alt="Umbrella" className={classNames} {...propsRest}>
          <path d="M12,2A9,9 0 0,1 21,11H13V19A3,3 0 0,1 10,22A3,3 0 0,1 7,19V18H9V19A1,1 0 0,0 10,20A1,1 0 0,0 11,19V11H3A9,9 0 0,1 12,2Z" />

        </Icon>
      );
    };
    UmbrellaIcon.displayName = 'UmbrellaIcon';
      