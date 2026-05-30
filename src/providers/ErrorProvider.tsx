import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const ErrorContext = createContext({});

export const ErrorProvider: FC<Props> = (props) => {

  const [hasTitleError, setHasTitleError] = useState<boolean>(false);
  const [hasTimeError, setHasTimeError] = useState<boolean>(false);

  const { children } = props;
  const titleErrors = { hasTitleError, setHasTitleError }
  const timeErrors = { hasTimeError, setHasTimeError }
  const errors = [titleErrors, timeErrors];

  return (
    <ErrorContext.Provider value={ errors }>
      {children}
    </ErrorContext.Provider>
  );
}