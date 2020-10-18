import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AppsIcon: FC<IconInterface> = function AppsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AppsIcon ${className}`;
      return (
        <Icon alt="Apps" className={classNames} {...propsRest}>
          <path d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />

        </Icon>
      );
    };
    AppsIcon.displayName = 'AppsIcon';
      