import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewCarouselOutlineIcon: FC<IconInterface> = function ViewCarouselOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewCarouselOutlineIcon ${className}`;
      return (
        <Icon alt="ViewCarouselOutline" className={classNames} {...propsRest}>
          <path d="M2 6H6V17H2V6M7 19H17V4H7V19M9 6H15V17H9V6M18 6H22V17H18V6Z" />

        </Icon>
      );
    };
    ViewCarouselOutlineIcon.displayName = 'ViewCarouselOutlineIcon';
      