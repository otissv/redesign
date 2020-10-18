import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GlassPintOutlineIcon: FC<IconInterface> = function GlassPintOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GlassPintOutlineIcon ${className}`;
      return (
        <Icon alt="GlassPintOutline" className={classNames} {...propsRest}>
          <path d="M4 2L6 22H17L19 2H4M6.2 4H16.8L15.2 20H7.8L6.2 4Z" />

        </Icon>
      );
    };
    GlassPintOutlineIcon.displayName = 'GlassPintOutlineIcon';
      