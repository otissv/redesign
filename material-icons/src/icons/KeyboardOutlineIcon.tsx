import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardOutlineIcon: FC<IconInterface> = function KeyboardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardOutlineIcon ${className}`;
      return (
        <Icon alt="KeyboardOutline" className={classNames} {...propsRest}>
          <path d="M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M4,7H20V17H4V7M5,8V10H7V8H5M8,8V10H10V8H8M11,8V10H13V8H11M14,8V10H16V8H14M17,8V10H19V8H17M5,11V13H7V11H5M8,11V13H10V11H8M11,11V13H13V11H11M14,11V13H16V11H14M17,11V13H19V11H17M8,14V16H16V14H8Z" />

        </Icon>
      );
    };
    KeyboardOutlineIcon.displayName = 'KeyboardOutlineIcon';
      