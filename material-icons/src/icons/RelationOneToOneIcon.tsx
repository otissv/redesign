import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelationOneToOneIcon: FC<IconInterface> = function RelationOneToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneToOneIcon ${className}`;
      return (
        <Icon alt="RelationOneToOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H19V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15Z" />

        </Icon>
      );
    };
    RelationOneToOneIcon.displayName = 'RelationOneToOneIcon';
      