import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ContentCopyIcon: FC<IconInterface> = function ContentCopyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentCopyIcon ${className}`;
      return (
        <Icon alt="ContentCopy" className={classNames} {...propsRest}>
          <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />

        </Icon>
      );
    };
    ContentCopyIcon.displayName = 'ContentCopyIcon';
      