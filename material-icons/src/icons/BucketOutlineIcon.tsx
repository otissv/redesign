import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BucketOutlineIcon: FC<IconInterface> = function BucketOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BucketOutlineIcon ${className}`;
      return (
        <Icon alt="BucketOutline" className={classNames} {...propsRest}>
          <path d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4M17.97 7H6.03L8.15 19H15.85L17.97 7Z" />

        </Icon>
      );
    };
    BucketOutlineIcon.displayName = 'BucketOutlineIcon';
      