import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicrosoftBingIcon: FC<IconInterface> = function MicrosoftBingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftBingIcon ${className}`;
      return (
        <Icon alt="MicrosoftBing" className={classNames} {...propsRest}>
          <path d="M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3" />

        </Icon>
      );
    };
    MicrosoftBingIcon.displayName = 'MicrosoftBingIcon';
      