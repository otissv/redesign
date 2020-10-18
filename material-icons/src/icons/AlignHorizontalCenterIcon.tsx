import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlignHorizontalCenterIcon: FC<IconInterface> = function AlignHorizontalCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignHorizontalCenterIcon ${className}`;
      return (
        <Icon alt="AlignHorizontalCenter" className={classNames} {...propsRest}>
          <path d="M20 19H13V22H11V19H4V13H11V11H7V5H11V2H13V5H17V11H13V13H20V19Z" />

        </Icon>
      );
    };
    AlignHorizontalCenterIcon.displayName = 'AlignHorizontalCenterIcon';
      