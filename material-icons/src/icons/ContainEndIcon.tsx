import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ContainEndIcon: FC<IconInterface> = function ContainEndIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContainEndIcon ${className}`;
      return (
        <Icon alt="ContainEnd" className={classNames} {...propsRest}>
          <path d="M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15M22,3V21H16V19H20V5H16V3H22Z" />

        </Icon>
      );
    };
    ContainEndIcon.displayName = 'ContainEndIcon';
      