import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BreadSliceIcon: FC<IconInterface> = function BreadSliceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BreadSliceIcon ${className}`;
      return (
        <Icon alt="BreadSlice" className={classNames} {...propsRest}>
          <path d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z" />

        </Icon>
      );
    };
    BreadSliceIcon.displayName = 'BreadSliceIcon';
      