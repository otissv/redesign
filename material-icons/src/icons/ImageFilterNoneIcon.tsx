import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ImageFilterNoneIcon: FC<IconInterface> = function ImageFilterNoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageFilterNoneIcon ${className}`;
      return (
        <Icon alt="ImageFilterNone" className={classNames} {...propsRest}>
          <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" />

        </Icon>
      );
    };
    ImageFilterNoneIcon.displayName = 'ImageFilterNoneIcon';
      