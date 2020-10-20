import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ContentDuplicateIcon: FC<IconInterface> = function ContentDuplicateIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentDuplicateIcon ${className}`;
      return (
        <Icon alt="ContentDuplicate" className={classNames} {...propsRest}>
          <path d="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z" />

        </Icon>
      );
    };
    ContentDuplicateIcon.displayName = 'ContentDuplicateIcon';
      