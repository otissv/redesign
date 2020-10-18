import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TableFurnitureIcon: FC<IconInterface> = function TableFurnitureIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableFurnitureIcon ${className}`;
      return (
        <Icon alt="TableFurniture" className={classNames} {...propsRest}>
          <path d="M2 7H22V10H20L21 19H18.5L17.94 14H6.06L5.5 19H3L4 10H2V7M17.5 10H6.5L6.29 12H17.71L17.5 10Z" />

        </Icon>
      );
    };
    TableFurnitureIcon.displayName = 'TableFurnitureIcon';
      