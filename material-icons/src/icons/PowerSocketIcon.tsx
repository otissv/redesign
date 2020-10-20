import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PowerSocketIcon: FC<IconInterface> = function PowerSocketIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerSocketIcon ${className}`;
      return (
        <Icon alt="PowerSocket" className={classNames} {...propsRest}>
          <path d="M15,15H17V11H15M7,15H9V11H7M11,13H13V9H11M8.83,7H15.2L19,10.8V17H5V10.8M8,5L3,10V19H21V10L16,5H8Z" />

        </Icon>
      );
    };
    PowerSocketIcon.displayName = 'PowerSocketIcon';
      