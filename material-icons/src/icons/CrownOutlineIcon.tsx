import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CrownOutlineIcon: FC<IconInterface> = function CrownOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CrownOutlineIcon ${className}`;
      return (
        <Icon alt="CrownOutline" className={classNames} {...propsRest}>
          <path d="M12 8L15 13.2L18 10.5L17.3 14H6.7L6 10.5L9 13.2L12 8M12 4L8.5 10L3 5L5 16H19L21 5L15.5 10L12 4M19 18H5V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V18Z" />

        </Icon>
      );
    };
    CrownOutlineIcon.displayName = 'CrownOutlineIcon';
      