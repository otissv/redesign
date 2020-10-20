import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrangeBringToFrontIcon: FC<IconInterface> = function ArrangeBringToFrontIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrangeBringToFrontIcon ${className}`;
      return (
        <Icon alt="ArrangeBringToFront" className={classNames} {...propsRest}>
          <path d="M2,2H11V6H9V4H4V9H6V11H2V2M22,13V22H13V18H15V20H20V15H18V13H22M8,8H16V16H8V8Z" />

        </Icon>
      );
    };
    ArrangeBringToFrontIcon.displayName = 'ArrangeBringToFrontIcon';
      