import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlignVerticalBottomIcon: FC<IconInterface> = function AlignVerticalBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignVerticalBottomIcon ${className}`;
      return (
        <Icon alt="AlignVerticalBottom" className={classNames} {...propsRest}>
          <path d="M11 18H5V2H11V18M19 8H13V18H19V8M22 20H2V22H22V20Z" />

        </Icon>
      );
    };
    AlignVerticalBottomIcon.displayName = 'AlignVerticalBottomIcon';
      