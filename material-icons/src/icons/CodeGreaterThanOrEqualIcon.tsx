import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CodeGreaterThanOrEqualIcon: FC<IconInterface> = function CodeGreaterThanOrEqualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeGreaterThanOrEqualIcon ${className}`;
      return (
        <Icon alt="CodeGreaterThanOrEqual" className={classNames} {...propsRest}>
          <path d="M13,13H18V15H13M13,9H18V11H13M6.91,7.41L11.5,12L6.91,16.6L5.5,15.18L8.68,12L5.5,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />

        </Icon>
      );
    };
    CodeGreaterThanOrEqualIcon.displayName = 'CodeGreaterThanOrEqualIcon';
      