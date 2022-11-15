import { ReactNode, ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (ui: ReactElement) => {
  const Providers = ({ children }: { children: ReactNode }) => (
    <div>
      {children}
    </div>
  );
  return render(ui, { wrapper: Providers });
};

export * from '@testing-library/react';
export { customRender as render, userEvent };
