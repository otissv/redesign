import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ImageFilterHdrIcon: FC<IconInterface> = function ImageFilterHdrIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageFilterHdrIcon ${className}`;
      return (
        <Icon alt="ImageFilterHdr" className={classNames} {...propsRest}>
          <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />

        </Icon>
      );
    };
    ImageFilterHdrIcon.displayName = 'ImageFilterHdrIcon';
      