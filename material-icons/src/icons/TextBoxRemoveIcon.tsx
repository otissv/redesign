import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TextBoxRemoveIcon: FC<IconInterface> = function TextBoxRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TextBoxRemoveIcon ${className}`;
      return (
        <Icon alt="TextBoxRemove" className={classNames} {...propsRest}>
          <path d="M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" />

        </Icon>
      );
    };
    TextBoxRemoveIcon.displayName = 'TextBoxRemoveIcon';
      