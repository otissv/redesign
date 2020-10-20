import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewCarouselIcon: FC<IconInterface> = function ViewCarouselIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewCarouselIcon ${className}`;
      return (
        <Icon alt="ViewCarousel" className={classNames} {...propsRest}>
          <path d="M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z" />

        </Icon>
      );
    };
    ViewCarouselIcon.displayName = 'ViewCarouselIcon';
      