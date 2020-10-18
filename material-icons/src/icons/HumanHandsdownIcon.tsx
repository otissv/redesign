import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HumanHandsdownIcon: FC<IconInterface> = function HumanHandsdownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanHandsdownIcon ${className}`;
      return (
        <Icon alt="HumanHandsdown" className={classNames} {...propsRest}>
          <path d="M12,1C10.89,1 10,1.9 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3A2,2 0 0,0 12,1M10,6C9.73,6 9.5,6.11 9.31,6.28H9.3L4,11.59L5.42,13L9,9.41V22H11V15H13V22H15V9.41L18.58,13L20,11.59L14.7,6.28C14.5,6.11 14.27,6 14,6" />

        </Icon>
      );
    };
    HumanHandsdownIcon.displayName = 'HumanHandsdownIcon';
      