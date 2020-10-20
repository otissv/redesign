import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TextShadowIcon: FC<IconInterface> = function TextShadowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TextShadowIcon ${className}`;
      return (
        <Icon alt="TextShadow" className={classNames} {...propsRest}>
          <path d="M3,3H16V6H11V18H8V6H3V3M12,7H14V9H12V7M15,7H17V9H15V7M18,7H20V9H18V7M12,10H14V12H12V10M12,13H14V15H12V13M12,16H14V18H12V16M12,19H14V21H12V19Z" />

        </Icon>
      );
    };
    TextShadowIcon.displayName = 'TextShadowIcon';
      