import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const YCombinatorIcon: FC<IconInterface> = function YCombinatorIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `YCombinatorIcon ${className}`;
      return (
        <Icon alt="YCombinator" className={classNames} {...propsRest}>
          <path d="M2,2H22V22H2V2M11.25,17.5H12.75V13.06L16,7H14.5L12,11.66L9.5,7H8L11.25,13.06V17.5Z" />

        </Icon>
      );
    };
    YCombinatorIcon.displayName = 'YCombinatorIcon';
      