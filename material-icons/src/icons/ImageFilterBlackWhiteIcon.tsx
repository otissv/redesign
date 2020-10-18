import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ImageFilterBlackWhiteIcon: FC<IconInterface> = function ImageFilterBlackWhiteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageFilterBlackWhiteIcon ${className}`;
      return (
        <Icon alt="ImageFilterBlackWhite" className={classNames} {...propsRest}>
          <path d="M19,19L12,11V19H5L12,11V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    ImageFilterBlackWhiteIcon.displayName = 'ImageFilterBlackWhiteIcon';
      