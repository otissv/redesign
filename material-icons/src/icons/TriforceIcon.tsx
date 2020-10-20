import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TriforceIcon: FC<IconInterface> = function TriforceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TriforceIcon ${className}`;
      return (
        <Icon alt="Triforce" className={classNames} {...propsRest}>
          <path d="M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z" />

        </Icon>
      );
    };
    TriforceIcon.displayName = 'TriforceIcon';
      