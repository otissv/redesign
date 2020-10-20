import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ContainIcon: FC<IconInterface> = function ContainIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContainIcon ${className}`;
      return (
        <Icon alt="Contain" className={classNames} {...propsRest}>
          <path d="M2,3H8V5H4V19H8V21H2V3M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15M22,3V21H16V19H20V5H16V3H22Z" />

        </Icon>
      );
    };
    ContainIcon.displayName = 'ContainIcon';
      