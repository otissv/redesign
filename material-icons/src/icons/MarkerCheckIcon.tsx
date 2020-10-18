import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MarkerCheckIcon: FC<IconInterface> = function MarkerCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MarkerCheckIcon ${className}`;
      return (
        <Icon alt="MarkerCheck" className={classNames} {...propsRest}>
          <path d="M10,16L5,11L6.41,9.58L10,13.17L17.59,5.58L19,7M19,1H5C3.89,1 3,1.89 3,3V15.93C3,16.62 3.35,17.23 3.88,17.59L12,23L20.11,17.59C20.64,17.23 21,16.62 21,15.93V3C21,1.89 20.1,1 19,1Z" />

        </Icon>
      );
    };
    MarkerCheckIcon.displayName = 'MarkerCheckIcon';
      