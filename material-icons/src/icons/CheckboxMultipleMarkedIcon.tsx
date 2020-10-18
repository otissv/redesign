import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckboxMultipleMarkedIcon: FC<IconInterface> = function CheckboxMultipleMarkedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxMultipleMarkedIcon ${className}`;
      return (
        <Icon alt="CheckboxMultipleMarked" className={classNames} {...propsRest}>
          <path d="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z" />

        </Icon>
      );
    };
    CheckboxMultipleMarkedIcon.displayName = 'CheckboxMultipleMarkedIcon';
      