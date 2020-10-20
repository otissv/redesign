import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PolymerIcon: FC<IconInterface> = function PolymerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PolymerIcon ${className}`;
      return (
        <Icon alt="Polymer" className={classNames} {...propsRest}>
          <path d="M19,4H15L7.1,16.63L4.5,12L9,4H5L0.5,12L5,20H9L16.89,7.37L19.5,12L15,20H19L23.5,12L19,4Z" />

        </Icon>
      );
    };
    PolymerIcon.displayName = 'PolymerIcon';
      