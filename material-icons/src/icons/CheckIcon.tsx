import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckIcon: FC<IconInterface> = function CheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckIcon ${className}`;
      return (
        <Icon alt="Check" className={classNames} {...propsRest}>
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />

        </Icon>
      );
    };
    CheckIcon.displayName = 'CheckIcon';
      