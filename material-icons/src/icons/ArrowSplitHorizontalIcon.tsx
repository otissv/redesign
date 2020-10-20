import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowSplitHorizontalIcon: FC<IconInterface> = function ArrowSplitHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowSplitHorizontalIcon ${className}`;
      return (
        <Icon alt="ArrowSplitHorizontal" className={classNames} {...propsRest}>
          <path d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />

        </Icon>
      );
    };
    ArrowSplitHorizontalIcon.displayName = 'ArrowSplitHorizontalIcon';
      