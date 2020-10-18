import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardCloseIcon: FC<IconInterface> = function KeyboardCloseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardCloseIcon ${className}`;
      return (
        <Icon alt="KeyboardClose" className={classNames} {...propsRest}>
          <path d="M12,23L16,19H8M19,8H17V6H19M19,11H17V9H19M16,8H14V6H16M16,11H14V9H16M16,15H8V13H16M7,8H5V6H7M7,11H5V9H7M8,9H10V11H8M8,6H10V8H8M11,9H13V11H11M11,6H13V8H11M20,3H4C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H20A2,2 0 0,0 22,15V5C22,3.89 21.1,3 20,3Z" />

        </Icon>
      );
    };
    KeyboardCloseIcon.displayName = 'KeyboardCloseIcon';
      