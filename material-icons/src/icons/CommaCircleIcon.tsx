import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CommaCircleIcon: FC<IconInterface> = function CommaCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommaCircleIcon ${className}`;
      return (
        <Icon alt="CommaCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15,13L13,17H10L12,13H9V7H15V13Z" />

        </Icon>
      );
    };
    CommaCircleIcon.displayName = 'CommaCircleIcon';
      