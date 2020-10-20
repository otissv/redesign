import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOnlyOneToOneIcon: FC<IconInterface> = function RelationOnlyOneToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOnlyOneToOneIcon ${className}`;
      return (
        <Icon alt="RelationOnlyOneToOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H19V19H17V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H17V13H19V15Z" />

        </Icon>
      );
    };
    RelationOnlyOneToOneIcon.displayName = 'RelationOnlyOneToOneIcon';
      