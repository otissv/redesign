import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SigmaLowerIcon: FC<IconInterface> = function SigmaLowerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SigmaLowerIcon ${className}`;
      return (
        <Icon alt="SigmaLower" className={classNames} {...propsRest}>
          <path d="M19,12C19,16.42 15.64,20 11.5,20C7.36,20 4,16.42 4,12C4,7.58 7.36,4 11.5,4H20V6H16.46C18,7.47 19,9.61 19,12M11.5,6C8.46,6 6,8.69 6,12C6,15.31 8.46,18 11.5,18C14.54,18 17,15.31 17,12C17,8.69 14.54,6 11.5,6Z" />

        </Icon>
      );
    };
    SigmaLowerIcon.displayName = 'SigmaLowerIcon';
      