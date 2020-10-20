import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeVariantOutlineIcon: FC<IconInterface> = function HomeVariantOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeVariantOutlineIcon ${className}`;
      return (
        <Icon alt="HomeVariantOutline" className={classNames} {...propsRest}>
          <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" />

        </Icon>
      );
    };
    HomeVariantOutlineIcon.displayName = 'HomeVariantOutlineIcon';
      