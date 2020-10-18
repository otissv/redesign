import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LampIcon: FC<IconInterface> = function LampIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LampIcon ${className}`;
      return (
        <Icon alt="Lamp" className={classNames} {...propsRest}>
          <path d="M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z" />

        </Icon>
      );
    };
    LampIcon.displayName = 'LampIcon';
      