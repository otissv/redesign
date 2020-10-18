import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphabetTengwarIcon: FC<IconInterface> = function AlphabetTengwarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphabetTengwarIcon ${className}`;
      return (
        <Icon alt="AlphabetTengwar" className={classNames} {...propsRest}>
          <path d="M10 7L12.5 3H15L11 7H10M12.5 9C11.96 9 11.46 9.13 11 9.35V9H8V11H9V21H11V12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5V14.5C14 15.33 13.33 16 12.5 16H12V18H12.5C14.43 18 16 16.43 16 14.5V12.5C16 10.57 14.43 9 12.5 9Z" />

        </Icon>
      );
    };
    AlphabetTengwarIcon.displayName = 'AlphabetTengwarIcon';
      