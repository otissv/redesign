import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FruitCherriesIcon: FC<IconInterface> = function FruitCherriesIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FruitCherriesIcon ${className}`;
      return (
        <Icon alt="FruitCherries" className={classNames} {...propsRest}>
          <path d="M16 13H15.5C14.8 11.7 14.3 10 13.8 8.3L14.7 9.2C17.4 11.3 19.8 10.9 19.8 10.9S20.5 7.1 17.8 5.1C15.5 3.3 13.4 3.3 12.8 3.4C12.7 2.8 12.7 2.3 12.6 1.9L11.2 2C11.2 5.2 8.5 11.1 7.6 13C5.6 13.2 4 14.9 4 17C4 19.2 5.8 21 8 21C9.1 21 10 20.6 10.7 19.9C10.3 19 10 18 10 17S10.3 15 10.7 14.1C10.3 13.7 9.7 13.4 9.2 13.2C9.9 11.7 11.1 9 11.9 6.4C12.3 8.7 13.1 11.4 14.1 13.5C12.9 14.2 12 15.5 12 17C12 19.2 13.8 21 16 21S20 19.2 20 17 18.2 13 16 13M8 15.5C7.2 15.5 6.5 16.2 6.5 17H5.5C5.5 15.6 6.6 14.5 8 14.5V15.5M16 15.5C15.2 15.5 14.5 16.2 14.5 17H13.5C13.5 15.6 14.6 14.5 16 14.5V15.5Z" />

        </Icon>
      );
    };
    FruitCherriesIcon.displayName = 'FruitCherriesIcon';
      