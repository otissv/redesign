import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaEIcon: FC<IconInterface> = function AlphaEIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaEIcon ${className}`;
      return (
        <Icon alt="AlphaE" className={classNames} {...propsRest}>
          <path d="M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z" />

        </Icon>
      );
    };
    AlphaEIcon.displayName = 'AlphaEIcon';
      