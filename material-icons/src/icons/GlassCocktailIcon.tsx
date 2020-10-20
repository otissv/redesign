import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GlassCocktailIcon: FC<IconInterface> = function GlassCocktailIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GlassCocktailIcon ${className}`;
      return (
        <Icon alt="GlassCocktail" className={classNames} {...propsRest}>
          <path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" />

        </Icon>
      );
    };
    GlassCocktailIcon.displayName = 'GlassCocktailIcon';
      