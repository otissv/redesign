import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewHeadlineIcon: FC<IconInterface> = function ViewHeadlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewHeadlineIcon ${className}`;
      return (
        <Icon alt="ViewHeadline" className={classNames} {...propsRest}>
          <path d="M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z" />

        </Icon>
      );
    };
    ViewHeadlineIcon.displayName = 'ViewHeadlineIcon';
      