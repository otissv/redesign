import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ValveClosedIcon: FC<IconInterface> = function ValveClosedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ValveClosedIcon ${className}`;
      return (
        <Icon alt="ValveClosed" className={classNames} {...propsRest}>
          <path d="M22 2V22H20V13H14.82A3 3 0 0 1 9.18 13H4V22H2V2H4V11H9.18A3 3 0 0 1 14.82 11H20V2Z" />

        </Icon>
      );
    };
    ValveClosedIcon.displayName = 'ValveClosedIcon';
      