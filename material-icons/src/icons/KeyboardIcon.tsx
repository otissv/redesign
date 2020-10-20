import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KeyboardIcon: FC<IconInterface> = function KeyboardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardIcon ${className}`;
      return (
        <Icon alt="Keyboard" className={classNames} {...propsRest}>
          <path d="M19,10H17V8H19M19,13H17V11H19M16,10H14V8H16M16,13H14V11H16M16,17H8V15H16M7,10H5V8H7M7,13H5V11H7M8,11H10V13H8M8,8H10V10H8M11,11H13V13H11M11,8H13V10H11M20,5H4C2.89,5 2,5.89 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7C22,5.89 21.1,5 20,5Z" />

        </Icon>
      );
    };
    KeyboardIcon.displayName = 'KeyboardIcon';
      