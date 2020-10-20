import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BackspaceIcon: FC<IconInterface> = function BackspaceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BackspaceIcon ${className}`;
      return (
        <Icon alt="Backspace" className={classNames} {...propsRest}>
          <path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />

        </Icon>
      );
    };
    BackspaceIcon.displayName = 'BackspaceIcon';
      