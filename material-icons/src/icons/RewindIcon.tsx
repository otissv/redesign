import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RewindIcon: FC<IconInterface> = function RewindIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RewindIcon ${className}`;
      return (
        <Icon alt="Rewind" className={classNames} {...propsRest}>
          <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" />

        </Icon>
      );
    };
    RewindIcon.displayName = 'RewindIcon';
      