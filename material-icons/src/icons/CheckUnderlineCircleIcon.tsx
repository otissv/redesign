import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckUnderlineCircleIcon: FC<IconInterface> = function CheckUnderlineCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckUnderlineCircleIcon ${className}`;
      return (
        <Icon alt="CheckUnderlineCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,18H7V16H17V18M10.3,14L7,10.7L8.4,9.3L10.3,11.2L15.6,5.9L17,7.3L10.3,14Z" />

        </Icon>
      );
    };
    CheckUnderlineCircleIcon.displayName = 'CheckUnderlineCircleIcon';
      