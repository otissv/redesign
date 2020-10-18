import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicrosoftDynamics365Icon: FC<IconInterface> = function MicrosoftDynamics365Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftDynamics365Icon ${className}`;
      return (
        <Icon alt="MicrosoftDynamics365" className={classNames} {...propsRest}>
          <path d="M6,2L17.25,8.5L13.5,11.5L6,8V2M6,9L9.5,11.25L6,22L18,9V15L6,22V9Z" />

        </Icon>
      );
    };
    MicrosoftDynamics365Icon.displayName = 'MicrosoftDynamics365Icon';
      