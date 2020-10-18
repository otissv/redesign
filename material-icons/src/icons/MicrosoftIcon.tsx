import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicrosoftIcon: FC<IconInterface> = function MicrosoftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftIcon ${className}`;
      return (
        <Icon alt="Microsoft" className={classNames} {...propsRest}>
          <path d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" />

        </Icon>
      );
    };
    MicrosoftIcon.displayName = 'MicrosoftIcon';
      