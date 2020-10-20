import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RhombusMediumOutlineIcon: FC<IconInterface> = function RhombusMediumOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RhombusMediumOutlineIcon ${className}`;
      return (
        <Icon alt="RhombusMediumOutline" className={classNames} {...propsRest}>
          <path d="M12 6.46C11.72 6.46 11.44 6.56 11.22 6.78L6.78 11.22C6.35 11.65 6.35 12.35 6.78 12.78L11.22 17.22C11.65 17.65 12.35 17.65 12.78 17.22L17.22 12.78C17.65 12.35 17.65 11.65 17.22 11.22L12.78 6.78C12.56 6.56 12.28 6.46 12 6.46M12 8.83L15.17 12L12 15.17L8.83 12L12 8.83Z" />

        </Icon>
      );
    };
    RhombusMediumOutlineIcon.displayName = 'RhombusMediumOutlineIcon';
      