import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BucketIcon: FC<IconInterface> = function BucketIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BucketIcon ${className}`;
      return (
        <Icon alt="Bucket" className={classNames} {...propsRest}>
          <path d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z" />

        </Icon>
      );
    };
    BucketIcon.displayName = 'BucketIcon';
      