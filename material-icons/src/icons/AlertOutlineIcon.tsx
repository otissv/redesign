import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlertOutlineIcon: FC<IconInterface> = function AlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertOutlineIcon ${className}`;
      return (
        <Icon alt="AlertOutline" className={classNames} {...propsRest}>
          <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />

        </Icon>
      );
    };
    AlertOutlineIcon.displayName = 'AlertOutlineIcon';
      