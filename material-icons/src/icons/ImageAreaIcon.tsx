import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ImageAreaIcon: FC<IconInterface> = function ImageAreaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageAreaIcon ${className}`;
      return (
        <Icon alt="ImageArea" className={classNames} {...propsRest}>
          <path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" />

        </Icon>
      );
    };
    ImageAreaIcon.displayName = 'ImageAreaIcon';
      