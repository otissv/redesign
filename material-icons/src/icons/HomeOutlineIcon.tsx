import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeOutlineIcon: FC<IconInterface> = function HomeOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeOutlineIcon ${className}`;
      return (
        <Icon alt="HomeOutline" className={classNames} {...propsRest}>
          <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />

        </Icon>
      );
    };
    HomeOutlineIcon.displayName = 'HomeOutlineIcon';
      