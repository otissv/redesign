import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RewindOutlineIcon: FC<IconInterface> = function RewindOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RewindOutlineIcon ${className}`;
      return (
        <Icon alt="RewindOutline" className={classNames} {...propsRest}>
          <path d="M10,9.9L7,12L10,14.1V9.9M19,9.9L16,12L19,14.1V9.9M12,6V18L3.5,12L12,6M21,6V18L12.5,12L21,6Z" />

        </Icon>
      );
    };
    RewindOutlineIcon.displayName = 'RewindOutlineIcon';
      