import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DeltaIcon: FC<IconInterface> = function DeltaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeltaIcon ${className}`;
      return (
        <Icon alt="Delta" className={classNames} {...propsRest}>
          <path d="M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22" />

        </Icon>
      );
    };
    DeltaIcon.displayName = 'DeltaIcon';
      