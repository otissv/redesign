import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShoppingMusicIcon: FC<IconInterface> = function ShoppingMusicIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShoppingMusicIcon ${className}`;
      return (
        <Icon alt="ShoppingMusic" className={classNames} {...propsRest}>
          <path d="M12,3A3,3 0 0,0 9,6H15A3,3 0 0,0 12,3M19,6A2,2 0 0,1 21,8V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6H19M9,19L16.5,14L9,10V19Z" />

        </Icon>
      );
    };
    ShoppingMusicIcon.displayName = 'ShoppingMusicIcon';
      